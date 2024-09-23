import { Router } from "express";
import JwtVerifyMiddleware from "../middlewares/jwtVerify.middleware";
import authController from "../controllers/auth.controller";
import rateLimit from "express-rate-limit";
import validateRegisterMiddleware from "../middlewares/validateRegister.middleware";
import validateLoginMiddleware from "../middlewares/validateLogin.middleware";

const authRouter: Router = Router();

/**
 * @swagger
 * /2fa/setup:
 *   post:
 *     summary: Configuración de autenticación de dos factores (2FA)
 *     tags:
 *       - Autenticación
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos para configurar 2FA
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nombre:
 *               type: string
 *             email:
 *               type: string
 *             contrasenia:
 *               type: string
 *             tipo:
 *               type: string
 *     responses:
 *       200:
 *         description: QR Code generado para la configuración de 2FA
 *         content:
 *           application/json:
 *             example:
 *               qrCodeUrl: "https://example.com/qr-code.png"
 */
authRouter.post("/2fa/setup", JwtVerifyMiddleware.jwtVerify , authController.postAuth2FaSetup);


/**
 * @swagger
 * /2fa/verify:
 *   post:
 *     summary: Verificación de autenticación de dos factores (2FA)
 *     tags:
 *       - Autenticación
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos para verificar 2FA
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: number
 *             token:
 *               type: string
 *     responses:
 *       200:
 *         description: Estado de verificación de 2FA
 *         content:
 *           application/json:
 *             example:
 *               message: "Verificación realizada con éxito"
 *               verifyStatus: true
 */
authRouter.post("/2fa/verify", authController.postAuth2FaVerify);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registro de usuario
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       description: Datos para registro
 *       required: true
 *       content:
 *        application/json:
 *         schema:
 *           type: object
 *           properties:
 *             nombre:
 *               type: string
 *               example: "Juanito"
 *             apellido:
 *               type: string
 *               example: "Pruebas"
 *             numero:
 *               type: string
 *               example: "080808080808"
 *             email:
 *               type: string
 *               example: "prueba123@gmail.com"
 *             contrasenia:
 *               type: string
 *               example: "User123."
 *             tipo:
 *               type: string
 *               example: junior
 *     responses:
 *       200:
 *         description: Estado de registro de usuario
 *         content:
 *           application/json:
 *             example:
 *               message: "Usuario creado exitosamente"
 *       409:
 *         description: Ya existe un usuario con este correo electrónico
 */
authRouter.post("/register",
    // rateLimit,
    validateRegisterMiddleware.validateRegisterData,
    authController.postUser
);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Verificación de autenticación en login
 *     tags:
 *       - Autenticación
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Datos para logearse
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             contrasenia:
 *               type: string
 *     responses:
 *       200:
 *         description: Estado de verificación de login
 *         content:
 *           application/json:
 *             example:
 *               message: "Verificación realizada con éxito"
 *               verifyStatus: true
 */
authRouter.post("/login",
    // rateLimit,
    validateLoginMiddleware.validateLoginData,
    authController.authLogin
);

export default authRouter;