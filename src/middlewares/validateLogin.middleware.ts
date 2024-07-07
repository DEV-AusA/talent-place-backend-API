import { Request, Response, NextFunction } from 'express';
import catchAsync from '../utils/catchAsync.util';

const validateLoginData = async (req: Request, res: Response, next: NextFunction) => {
  const { email, contrasenia } = req.body;
  if (!email || !contrasenia) throw ({
    message: 'Correo electrónico y contraseña son obligatorios',
    code: 400
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) throw ({
    message: 'Formato de correo electrónico no válido',
    code: 400
  });

  next();
};

export default {
  validateLoginData: catchAsync(validateLoginData)
};
