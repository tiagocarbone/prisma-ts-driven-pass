import { Request, Response, NextFunction } from "express";
import { userSignUpRepository, userSignInRepository } from "../repository/auth-repository";
import jwt from "jsonwebtoken";


export async function userSignUpService(req: Request): Promise<void> {

        await userSignUpRepository(req);

}





export async function userSignInService(req: Request): Promise<string> {

        const user = await userSignInRepository(req.body);
        const token = jwt.sign(
            { userId: user.id
              
             },
            process.env.JWT_SECRET,
            { expiresIn: 86400 }
        );
        return token;
  
}