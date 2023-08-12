import { Record } from "@/lib/inteface";
import Row, { Prop } from "./Row";
import { FC } from "react";
import {v4 as uuid} from 'uuid';

// export interface Prop{
//   name:Record[]
// }
const AddedWords = ({names}:Prop) => {
  // const names = names
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
          {Row ({names})}
        </tbody>
      </table>
    </div>
  );
};

export default AddedWords;
