import { Record } from "@/lib/inteface";
import { deleteOne, findRecords } from "@/lib/records";

export interface Prop{
  names:Record[]
}
const Row = ({names}:Prop) => {
  console.log(names);
  let x = 0
   
  return (
      names.map((el:Record) => {
        return(
          <tr key={el.id}>
            <th>{x++}</th>
            <td>{el.po_angielsku}</td>
            <td>{el.po_polsku}</td>
            <td>
               <button  className='btn btn-info'>popraw</button>
            </td>
          </tr>
        )
      })
  

      )
    
    
  
};

export default Row;
