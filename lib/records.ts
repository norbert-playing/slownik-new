import { Record } from "./inteface";
import { prisma } from "./prizma";

export async function getRecords() {
  try {
    const records = await prisma.slownik.findMany();
    console.log(records);
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
export async function createRecords(record: Record) {
  try {
    const records = await prisma.slownik.create({
      data: record,
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
