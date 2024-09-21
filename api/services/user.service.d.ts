import Usuario from "../entities/usuario";
declare const _default: {
    getUserProfileByIdService: (userId: string) => Promise<Usuario>;
    getAllUsersService: () => Promise<Usuario[]>;
    editUserProfileService: (id: string, userData: Partial<Usuario>) => Promise<{
        id: string;
        nombre: string;
        apellido: string;
        email: string;
        tipo: string;
        telefono: string;
        pais: string;
        autenticacion2FAHabilitada: boolean;
        updatedAt: Date;
    }>;
    getAllUsersHabilitiesService: () => Promise<import("../entities/habilidad").Habilidad[]>;
};
export default _default;
