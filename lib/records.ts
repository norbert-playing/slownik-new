import { User } from "@prisma/client";
import { Record } from "./inteface";
import { prisma } from "./prizma";
import { Session, getServerSession } from "next-auth";
import { authoption } from "./authoptions";

export async function getRecords(id:string) {
  try {
    const records = await prisma.slownik.findMany({
      where: {
        userId: id,
      },
    });
    return { records };
  } catch (error) {
    return { error };
  }
}
export async function deleteRecords() {
  try {
    const records = await prisma.slownik.deleteMany();
    return { records };
  } catch (error) {
    return { error };
  }
}
export async function createUser(user:User) {
  try {
    const logedUser = await prisma.user.create({
      data:{
        name: user?.name,
        email:user?.email,
        image:user?.email
      }
    })
  } catch (error) {
    return {error}
  }
  
}
export async function createRecords({po_angielsku,po_polsku}: Record,userId:string) {
  try {
    // const session = await getServerSession(authoption)
    // console.log(session);
    // console.log('create record() ',userId, ' -',po_angielsku);
    const records = await prisma.slownik.create({
      data: {
        po_angielsku,
        po_polsku,
        userId:userId
      },
    });
    console.log("inside createRecord-lib");
    return { records };
  } catch (error) {
    return { error };
  }
}
export async function findRecords(pol:string) {
  try {
    const records = await prisma.slownik.findFirstOrThrow({
      where: {
        po_polsku: pol,
      },
    });
    return { records };
  } catch (error) {
    return { error };
  }
}
export async function deleteOne(ang: string) {
  try {
    const records = await prisma.slownik.delete({
      where: {
        po_angielsku:ang
      },
    });
    return {records}
  } catch (error) {
    return { error };
  }
}
