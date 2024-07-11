interface ProjectDto {
    id: string;
    empresaId: string;
    titulo: string;
    descripcion: string;
    requisitos: string;
    habilidades: string[];
    categorias: string[];
    modalidad: string;
    estado: string;
  }
  export default ProjectDto;