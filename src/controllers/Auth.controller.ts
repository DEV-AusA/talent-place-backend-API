import { Request, Response } from "express";
import catchAsync from "../utils/catch-async.util";

const postAuth2FaSetup = async (req: Request, res: Response) => {
    // const Setup = await metodoService;
    res.status(200).json({message: "Por aca el SETUP 2FA"});
}

const postAuth2FaVerify = async (req: Request, res: Response) => {
    // const Verify = await metodoService;
    res.status(200).json({message: "Por aca el VERIFY 2FA"});
}

export default {
    postAuth2FaSetup: catchAsync(postAuth2FaSetup),
    postAuth2FaVerify: catchAsync(postAuth2FaVerify)
}