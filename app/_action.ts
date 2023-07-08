
'use server'

import { Record } from "@/lib/inteface"
import { createRecords, createUser, deleteOne, deleteRecords } from "@/lib/records"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createRecordAction(record:Record,useremail:string) {

    const userId  =  await getUserId(useremail) as string
    console.log('_action user id',useremail);
     await createRecords(record,userId)
}
export async function deleteRecordAction() {
    await deleteRecords()
}
export async function deleteOneaction(arg:string) {
  await deleteOne(arg)
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

