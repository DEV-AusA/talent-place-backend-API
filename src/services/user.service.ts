import { AppDataSource } from "../config/typeorm.config"
import Usuario from "../entities/usuario"

const userRepository = AppDataSource.getRepository(Usuario);

const getUserProfileByIdService = async (userId: number) => {
    //mediante querys
    const userByQuery: Usuario = await userRepository.createQueryBuilder('usuarios')
    .select(["usuarios.id", "usuarios.nombre", "usuarios.email", "usuarios.tipo", "usuarios.autenticacion2FAHabilitada", "usuarios.updatedAt"])
    .where({id: userId})
    .getOne();
    
    const user: Usuario = await userRepository.findOneBy({id: userId});
    
    if (!userByQuery || !user) throw ({
        message: "No existe un usuario con ese id",
        code: 404
    });
    
    //destructurando
    const { id, nombre, email, tipo, autenticacion2FAHabilitada, updatedAt} = user;

    return {id, nombre, email, tipo, autenticacion2FAHabilitada, updatedAt};
}

export default {
    getUserProfileByIdService
}