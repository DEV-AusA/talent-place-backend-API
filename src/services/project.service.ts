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

const getProyectByIdService = async (id: string, projectId: string) =>{
    //busco la compañia
    await findCompanyById(id);
    
    try {
        const project: Proyecto = await projectRepository.findOneBy({id: projectId});
        
        if (!project) throw ({
            message: "No existe un proyecto con este id",
            code: 404
        })

        return project;
        
    } catch (error) {
        throw error;
    }

}

const postNewProjectService = async (id: string, projectData: ProjectDto) =>{
    
    await findCompanyById(id);

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
            empresaId: id,
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

const deleteProjectByIdService = async (id: string, projectId: string) =>{
    
    const projectFinded = await getProyectByIdService(id, projectId);

    try {
        
        await projectRepository.remove(projectFinded);        
        return {message: `Proyecto '${projectFinded.titulo}' eliminado con exito`};

    } catch (error) {
        throw error;
    }
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