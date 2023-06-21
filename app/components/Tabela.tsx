import { Record } from "@/lib/inteface";
import Row from "./Row";
import { FC } from "react";

export interface Prop{
  name:Record[]
}
const AddedWords:FC<Prop> = ({name}) => {
  const names = name
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Angielskie</th>
            <th>Polskie</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Row  names = {names}/>
        </tbody>
      </table>
    </div>
  );
};

export default AddedWords;
