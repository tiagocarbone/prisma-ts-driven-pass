import { Request, Response, NextFunction } from "express";
import  { AnySchema } from "joi";


export function validateSchema(schema: AnySchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false });
        
        if (validation.error) {
            return next({
                type: "joi-validation",
                message: validation.error.details.map(detail => detail.message)
            });
        }
        
        next();
    };
}