import { Request, Response, NextFunction } from "express";
declare const jwtRolVerify: (roles: string[]) => (req: Request, res: Response, next: NextFunction) => void;
export default jwtRolVerify;
