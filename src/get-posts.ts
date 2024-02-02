import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient({log : ['info' , "query"]});

const main = async () => {
        // const posts = await prisma.post.findUnique({
        //     where : {
        //         id : 1,
        //         title : "First Post"
        //     }
        // })
    const posts = await prisma.post.findMany();
    console.log(posts);
    
}
main().then(async () => {
    await prisma.$disconnect();

}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit()
})