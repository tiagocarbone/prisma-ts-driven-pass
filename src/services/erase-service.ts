
import { eraseRepository } from "../repository/erase-repository";



export async function eraseService(userId : number): Promise<void> {

        await eraseRepository(userId);
  
}