import prisma from "../db"


export async function eraseRepository(userId: number) {

    console.log(userId)
    try {
        await prisma.credentials.deleteMany({
            where: {
                userId: userId
            }
        })

        await prisma.users.delete({   
            where: {
                id: userId
            }
        })
    }catch(err){
        console.log(err)
        throw err
    }
   
    
}