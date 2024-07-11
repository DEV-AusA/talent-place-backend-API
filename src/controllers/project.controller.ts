import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync.util";
import projectService from "../services/project.service";
import ProjectDto from "../dto/project.dto";

const getAllProjects = async (req: Request, res: Response) =>{
    const projects = await projectService.getAllProjectsService();
    res.status(200).json(projects);
}

const getProyectById = async (req: Request, res: Response) =>{    
    const { id } = req.params;
    const { projectId } = req.body;
    const project = await projectService.getProyectByIdService(id, projectId)
    res.status(200).json(project);
}

const postNewProject = async (req: Request, res: Response) =>{
    const projectData: ProjectDto = req.body;
    const projectOk = await  projectService.postNewProjectService(projectData);
    res.status(200).json(projectOk);
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