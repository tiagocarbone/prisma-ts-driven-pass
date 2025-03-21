import prisma from "../src/db/index";


async function main() {
    await prisma.users.upsert({
        where: { email: "demo@driven.com.br" },
        update: {},
        create: {
            name: "Demo",
            email: "demo@driven.com.br",
            password: "demo123"
        }

    })
}


main()
    .then( async () => {
        await prisma.$disconnect();
    })
    .catch( async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })

/*
 {
    name: "Demo",
    email: "demo@driven.com.br",
    password: "demo123"
}
*/