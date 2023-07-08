"use client";

import { deleteOneaction, deleteRecordAction } from "../_action";

async function deletAll() {
  await deleteRecordAction();
}
async function deleteOneLine(arg:string) {
    await deleteOneaction(arg);
  }
const Button = () => {
  return (
    <>
      <button className='btn btn-warning m-5' onClick={deletAll}>
        Skasuj wszystkie slowa
      </button>
    </>
  );
};
interface Kang{
    kang:string
}
export const ButtonTabela:React.FC<Kang> = (props) => {
    const kang = props.kang
  return (
    <div className="flex gap-2">
      <button className='btn btn-info' >popraw</button>
      <button className='btn btn-info  bg-red-300 hover:bg-red-500' onClick={ () => {deleteOneLine(kang)}}>usuń</button>
    </div>
  );
};

export default Button;
