import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ['info' , 'query']});

const main = async () => {
  await prisma.post.update({
        where : {
            id : 1
        },
        data : {
            title : "Updated",
            content : "New Updated content",
            published : true,
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