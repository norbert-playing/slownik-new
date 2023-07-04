import {
  createRecords,
  deleteRecords,
  findRecords,
  getRecords,
} from "@/lib/records";
import { deleteRecordAction } from "../_action";
import Button from "../components/Button";

const Slownik = async () => {
  
  const { records } = await getRecords('norbertelisty@gmail.com');
  return (
    <>
      <div className='md:text-2xl text-center italic mb-5'>
        wszystkie poznane słówka
      </div>

      <ul className='max-w-4xl flex flex-col gap-3 mx-auto bg-gray-300 text-center  '>
        {records?.map((record) => {
          console.log(record.po_angielsku  ,'to jest w ulisyta');
          return (
            <li>{`${record.po_angielsku}  ➡️  ${record.po_polsku}      `}</li>
          );
        })}
      </ul>
      <Button />
    </>
  );
};
// ${record.createdAt?.toLocaleDateString()}

export default Slownik;
