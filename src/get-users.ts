import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ["info" , "query"]})

const main = async () => {
   const users =  await prisma.user.findMany();
// const users = await prisma.user.findUnique({
//     where : {
//         email : "ashish@yopmail.com"
//     }
// })
    console.log(users);
    
}

main().then(async () => {
    await prisma.$disconnect();

}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit()
})