import { Record } from "@/lib/inteface";
import Row from "./Row";
import { FC } from "react";
import {v4 as uuid} from 'uuid';

export interface Prop{
  name:Record[]
}
const AddedWords = ({name}:Prop) => {
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
          <Row key={uuid()} names = {names}/>
        </tbody>
      </table>
    </div>
  );
};

export default AddedWords;
