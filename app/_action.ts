
'use server'

import { authoption } from "@/lib/authoptions"
import { Record } from "@/lib/inteface"
import { createRecords, createUser, deleteRecords } from "@/lib/records"
import { getServerSession } from "@/lib/serversesion"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createRecordAction(record:Record) {
    const session =await getServerSession()
    const userEmail = session?.user?.email
    const userId =  await getUserId(userEmail!)
    console.log('in server action!!! ', session, ' user id: ',userId);
     await createRecords(record)
}
export async function deleteRecordAction() {
    await deleteRecords()
}
interface Iuser{
    name: string,
    email: string,
    image: string
}

async function getUserId(email:string|undefined) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  return user?.id
}

