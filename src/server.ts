import express, { NextFunction, Request, Response } from "express"
import router from "./routes/principal.router"
import cors from "cors"
import IError from "./interfaces/iError.interface";
import { loggerGlobal } from "./middlewares/logger.middleware";
import limiterGlobal from "./config/rateLimit.config";

const server = express();
server.use(cors());
server.use(express.json());
server.use(loggerGlobal);
// server.use(limiterGlobal);
server.use(router);

// manejo los errores y los muestra en .json
server.use((err: IError , req: Request, res: Response, next: NextFunction ) => {
    res.status(err.code || 500).json(err);
});

export default server;
