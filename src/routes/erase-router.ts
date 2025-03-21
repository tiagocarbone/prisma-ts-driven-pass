import { validarToken } from "../middlewares/auth-middleware";
import { eraseRouterController } from "../controller/erase-controller";
import {Router} from "express";


const eraseRouter = Router();

eraseRouter.delete("/erase", validarToken, eraseRouterController);

export default eraseRouter;