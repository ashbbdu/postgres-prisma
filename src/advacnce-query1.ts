import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({log : ['info' , 'query']});

const main = async () => {
    let response =  await prisma.user.findMany({
        where : {
            email : {
                endsWith : "outlook.com"
            }
        }
    })
    console.log(response);
    
}

main().then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })