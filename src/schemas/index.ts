import joi from "joi";
import { UserSignUp, UserSignIn } from "../protocols/index";


export const signUpSchema = joi.object<UserSignUp>({
    name : joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    passwordConfirm: joi.string().min(6).required()
});


export const signInSchema = joi.object<UserSignIn>({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});