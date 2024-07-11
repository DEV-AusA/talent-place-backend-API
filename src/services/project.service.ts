import { AppDataSource } from "../config/typeorm.config"
import ProjectDto from "../dto/project.dto";
import Categoria from "../entities/categoria";
import { Habilidad } from "../entities/habilidad";
import Proyecto from "../entities/proyecto"
import Usuario from "../entities/usuario";
import categoryService from "./category.service";
import habilidadService from "./habilidad.service";

const projectRepository = AppDataSource.getRepository(Proyecto);
const userRepository = AppDataSource.getRepository(Usuario);

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

const postNewProjectService = async (projectData: ProjectDto) =>{
    
    await findCompanyById(projectData.id);

    try {
        //agrego categoria
        const category: Categoria = await categoryService.postNewCategory(projectData.categoria);
        //agrego habilidades
        const habilities: Habilidad[] = await habilidadService.postNweHability(projectData.habilidades);
        console.log(habilities);        
        
        const project = await projectRepository.create({
            titulo: projectData.titulo,
            descripcion: projectData.descripcion,
            requisitos: projectData.requisitos,
            empresaId: projectData.id,
            // presupuesto: 500,
            modalidad: projectData.modalidad,
            estado: true,        
            categoria: category,
            habilidades: habilities
        })
        const projectCreated = await projectRepository.save(project);
        return projectCreated;
    } catch (error) {
        throw error;        
    }

    
}

const editProjectByIdService = async () =>{

}

const deleteProjectByIdService = async () =>{

}

const findCompanyById = async (id: string) => {

    try {        
        const company = await userRepository.findOneBy({id});
        if (!company) throw ({
            message: "La compañia con ese id no existe",
            code: 404
        })
        return company;
    } catch (error) {
        throw error;
    }
}

export default {
    getAllProjectsService,
    getProyectByIdService,
    postNewProjectService,
    editProjectByIdService,
    deleteProjectByIdService
}