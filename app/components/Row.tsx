import { Record } from "@/lib/inteface";
import { deleteOne, findRecords } from "@/lib/records";
import { ButtonTabela } from "./Button";
import { FC } from "react";
import {v4 as uuid} from 'uuid';


export interface Prop{
  names:Record[],
  
}
const Row = ({names}:Prop) => {
  let x = 0
  return (
    names.map((el:Record) => {
        const kang = el.po_angielsku;
        if(x!=0){

          return(
            <tr key={uuid()}>
              <th>{x++}</th>
              <td>{el.po_angielsku}</td>
              <td>{el.po_polsku}</td>
              <td>
                 <ButtonTabela kang={kang}/>
              </td>
            </tr>
          )
        }else{
          x=1
        }
      })
  

      )
    
    
  
};

export default Row;
