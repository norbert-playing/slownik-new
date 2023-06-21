'use server'

import { Record } from "@/lib/inteface"
import { createRecords, deleteRecords } from "@/lib/records"

export async function createRecordAction(record:Record) {
     await createRecords(record)
}
export async function deleteRecordAction() {
    await deleteRecords()
}