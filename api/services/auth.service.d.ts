import UserDto from "../dto/user.dto";
declare const _default: {
    auth2FaSetupService: (userId: string) => Promise<string>;
    auth2FaVerifyService: (userId: string, token: string) => Promise<boolean>;
    createUser: (userData: UserDto) => Promise<{
        message: string;
    }>;
    authLogin: (email: string, contrasenia: string) => Promise<{
        message: string;
        refreshToken: string;
        user: {
            id: string;
            apellido: string;
            nombre: string;
            telefono: string;
            pais: string;
            tipo: string;
            email: string;
        };
    }>;
};
export default _default;
