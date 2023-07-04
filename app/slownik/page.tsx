import {
  createRecords,
  deleteRecords,
  findRecords,
  getRecords,
} from "@/lib/records";
import { deleteRecordAction, getUserId } from "../_action";
import Button from "../components/Button";
import { getServerSession } from "next-auth";
import { authoption } from "@/lib/authoptions";

const Slownik = async () => {
  const session = await getServerSession(authoption)
  if(session){
    const email = session.user?.email as string
    const userid =await getUserId(email) as string
    const { records } = await getRecords(userid);
    console.log('records ze slo0wnika ',records);
    return (
    <>
      <div className='md:text-2xl text-center italic mb-5'>
        wszystkie poznane słówka
      </div>

      <ul className='max-w-4xl flex flex-col gap-3 mx-auto bg-gray-300 text-center  '>
        {records?.map((record) => {
          return (
            <li>{`${record.po_angielsku}  ➡️  ${record.po_polsku}      `}</li>
          );
        })}
      </ul>
      <Button />
    </>
  );
};
}
// ${record.createdAt?.toLocaleDateString()}

export default Slownik;
