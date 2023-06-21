'use client'

import { deleteRecordAction } from "../_action";

async function deletAll() {
    await deleteRecordAction()
}
const Button = () => {
    return ( 
        <>
        <button className="btn btn-warning m-5" onClick={deletAll}>Skasuj wszystkie slowa</button>
        </>
     );
}
 
export default Button;