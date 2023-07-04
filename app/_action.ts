
'use server'

import { authoption } from "@/lib/authoptions"
import { Record } from "@/lib/inteface"
import { createRecords, createUser, deleteRecords } from "@/lib/records"
import { getServerSession } from "@/lib/serversesion"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createRecordAction(record:Record,useremail:string) {
    // const session =await getServerSession()
    // const userEmail = session?.user?.email
    const userId  =  await getUserId(useremail) as string
    console.log('_action user id',useremail);
     await createRecords(record,userId)
}
export async function deleteRecordAction() {
    await deleteRecords()
}
interface Iuser{
    name: string,
    email: string,
    image: string
}

export async function getUserId(email:string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  return user?.id
}

