import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync.util";

const getAllProjects = async (req: Request, res: Response) =>{

}

const getProyectById = async (req: Request, res: Response) =>{

}

const postNewProject = async (req: Request, res: Response) =>{

}

const editProjectById = async (req: Request, res: Response) =>{

}

const deleteProjectById = async (req: Request, res: Response) =>{

}

export default {
    getAllProjects: catchAsync(getAllProjects),
    getProyectById: catchAsync(getProyectById),
    postNewProject: catchAsync(postNewProject),
    editProjectById: catchAsync(editProjectById),
    deleteProjectById: catchAsync(deleteProjectById)
}