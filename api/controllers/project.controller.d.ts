import { Request, Response } from "express";
declare const _default: {
    getAllProjects: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getProyectById: (req: Request, res: Response, next: import("express").NextFunction) => void;
    postNewProject: (req: Request, res: Response, next: import("express").NextFunction) => void;
    editProjectById: (req: Request, res: Response, next: import("express").NextFunction) => void;
    deleteProjectById: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getAllProjectsByUserId: (req: Request, res: Response, next: import("express").NextFunction) => void;
    getAllCategories: (req: Request, res: Response, next: import("express").NextFunction) => void;
};
export default _default;
