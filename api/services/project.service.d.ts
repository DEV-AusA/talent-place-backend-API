import ProjectDto from "../dto/project.dto";
import ProjectUpdateDto from "../dto/projectUpdate.dto";
import Categoria from "../entities/categoria";
import Proyecto from "../entities/proyecto";
declare const _default: {
    getAllProjectsService: () => Promise<Proyecto[]>;
    getProjectByIdService: (projectId: string) => Promise<Proyecto>;
    postNewProjectService: (id: string, projectData: ProjectDto) => Promise<Proyecto>;
    editProjectByIdService: (id: string, projectData: ProjectUpdateDto) => Promise<Proyecto>;
    deleteProjectByIdService: (projectId: string) => Promise<{
        message: string;
    }>;
    getAllProjectsByUserIdService: (id: string) => Promise<Proyecto[]>;
    getAllCategoriesService: () => Promise<Categoria[]>;
};
export default _default;
