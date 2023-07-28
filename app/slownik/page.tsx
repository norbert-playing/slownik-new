
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
import { Result } from "postcss";
import Link from "next/link";

function update() {
  console.log('record editable');
}
let dzwiek:string;
async function getTranslation() {
  
  const url:string = 'https://api.dictionaryapi.dev/api/v2/entries/en/gray';
  const options = {
    method: 'GET',
    // headers: {
    //   'X-RapidAPI-Key': 'ceb5cf0e6bmsh7d73f02392d4529p192c24jsn3d857ee782a9',
    //   'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    // }
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // const phonet = await result['phonetics']
    console.log(result[0].phonetics[1].audio);
    dzwiek = result[0].phonetics[1].audio as string
    // return dzwiek
  } catch (error) {
    console.error(error);
  }
}

const Slownik = async () => {
  const getTrnsl = getTranslation()
  const session = await getServerSession(authoption)
  if(session){
    const email = session.user?.email as string
    const userid =await getUserId(email) as string
    const { records } = await getRecords(userid);


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
      <Link href={dzwiek}>dzwiek</Link>
    </>
  );
};
}
// ${record.createdAt?.toLocaleDateString()}

export default Slownik;
