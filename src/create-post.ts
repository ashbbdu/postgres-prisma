import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ['info' , 'query']});

const main = async () => {
    await prisma.post.create({
        data : {
            title : "First Post 6",
            content : "Hi All, This is the fist post 6!",
            author : {
                connect : {
                    id : 4
                }
            }
        }
    })
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e  ,"hi from error")
    await prisma.$disconnect()
    process.exit(1)
})