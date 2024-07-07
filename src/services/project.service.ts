import { AppDataSource } from "../config/typeorm.config"
import Proyecto from "../entities/proyecto"

const projectRepository = AppDataSource.getRepository(Proyecto);

const getAllProjectsService = async () =>{
    try {
        
        const projects: Proyecto[] = await projectRepository.find();
        return projects
    } catch (error) {
        throw error;
    }

}

const getProyectByIdService = async () =>{

}

const postNewProjectService = async () =>{

}

const editProjectByIdService = async () =>{

}

const deleteProjectByIdService = async () =>{

}

export default {
    getAllProjectsService,
    getProyectByIdService,
    postNewProjectService,
    editProjectByIdService,
    deleteProjectByIdService
}