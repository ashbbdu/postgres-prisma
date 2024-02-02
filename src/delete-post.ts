import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ['query' , 'info']});

const main = async () => {
    await prisma.post.deleteMany({
        where : {
            authorId : 1
        }
    })
}

main().then(async () => {
    await prisma.$disconnect();

}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit()
})