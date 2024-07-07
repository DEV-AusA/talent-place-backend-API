import { Request, Response, NextFunction } from 'express';
import catchAsync from '../utils/catchAsync.util';

const validateRegisterData = async (req: Request, res: Response, next: NextFunction) => {
  const { nombre, email, contrasenia } = req.body;

  if (!nombre || !email || !contrasenia) throw ({
    message: 'Nombre, correo electrónico, contraseña y confirmación de contraseña son obligatorios',
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
  validateRegisterData: catchAsync(validateRegisterData)
}
