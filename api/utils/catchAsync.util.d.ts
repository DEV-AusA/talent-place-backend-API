import { NextFunction, Request, Response } from "express";
type ControllerFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;
declare const catchAsync: (controller: ControllerFunction) => (req: Request, res: Response, next: NextFunction) => void;
export default catchAsync;
