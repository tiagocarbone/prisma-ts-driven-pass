import { Request, Response, NextFunction } from "express";
import { eraseService } from "../services/erase-service";



export async function eraseRouterController(req: Request, res: Response, next: NextFunction) {

    const userId = res.locals.userId
    console.log("userId", userId)

    await eraseService(userId)
    res.sendStatus(204);

}