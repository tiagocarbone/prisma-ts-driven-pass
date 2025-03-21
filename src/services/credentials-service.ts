import { Request } from "express";
import { credentialsPostRepository, credentialsGetRepository, credentialsGetByIdRepository, credentialsDeleteByIdRepository, credentialPutRepository } from "../repository/credentials-repository";
import { PutCredential } from "../protocols/index";

export async function postCredentialsService(req: Request, userId: number){

    await credentialsPostRepository(req, userId);
}



export async function getCredentialsService(userId: number){

    const credentials = await credentialsGetRepository(userId);
    return credentials
}



export async function getCredentialByIdService(userId: number, credentialId: number){


    if(credentialId < 0) throw { type: "bad request", message: "parâmetro negativo" };

    const credential = await credentialsGetByIdRepository(userId, credentialId);
    return credential
}

export async function deleteCredentialByIdService(userId: number, credentialId: number){

    if(credentialId < 0) throw { type: "bad request", message: "parâmetro negativo" };

    await credentialsDeleteByIdRepository(userId, credentialId);
    
}

export async function putCredentialService(userId: number, credentialId: number, credential: PutCredential){

    if(credentialId < 0) throw { type: "bad request", message: "parâmetro negativo" };


    await credentialPutRepository(userId, credentialId, credential);
    
}