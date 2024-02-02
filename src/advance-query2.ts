import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({log : ['info' , 'query']});
//  Pagination

// SELECT * FROM users OFFSET 0 LIMIT 10  // here offset means page number and limit means number of records on a page
const main = async () => {
    const users = await prisma.user.findMany({
        take : 2,   //  number of records
        skip : 1    // page number
    })
    console.log(users , "users");
    
} 

main().then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })