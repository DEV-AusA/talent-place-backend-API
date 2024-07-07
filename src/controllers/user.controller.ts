import { Request, Response } from "express";
import userService from "../services/user.service";
import catchAsync from "../utils/catchAsync.util";
import Usuario from "../entities/usuario";

const getUserProfile = async (req: Request, res: Response) =>{
    const { id } = req.body;
    const userProfile = await userService.getUserProfileByIdService(id);
    res.status(200).json(userProfile)
}

const editUserData = async (req: Request, res: Response) =>{
    // const userUpdated = await userService
}

const getAllUsers = async (req: Request, res: Response) => {
    const users: Usuario[] = await userService.getAllUsersService();
    res.status(200).json(users);
}

export default {
    getUserProfile: catchAsync(getUserProfile),
    editUserData: catchAsync(editUserData),
    getAllUsers: catchAsync(getAllUsers)
}