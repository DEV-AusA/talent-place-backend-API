import Aplicacion from "../entities/aplicacion";
declare const _default: {
    getApplicationsUser: (userId: string) => Promise<Aplicacion[]>;
    postApplyUserToProject: (userId: string, proyectoId: string) => Promise<{
        message: string;
    }>;
};
export default _default;
