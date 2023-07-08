"use client";
import { revalidatePath } from "next/cache";
import { createRecordAction } from "../_action";
import { use, useEffect, useRef, useState } from "react";
import { FiPlusSquare } from "react-icons/fi";
import { Record } from "../../lib/inteface";
import Tabela from "./Tabela";
import { useSession } from "next-auth/react";
import { authoption } from "@/lib/authoptions";

const InputForm = () => {
  const { data: session, status } = useSession();

  const [lastWords, setLastWords] = useState<Record[]>([]);
  const [object, setObject] = useState<Record>({
    po_angielsku: "",
    po_polsku: "",
  });
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    setLastWords([...lastWords, object]);
  }, [object]);

  async function action(data: FormData) {
    const ang = data.get("AngWord")?.toString()!;
    const pl = data.get("PolWord")?.toString()!;
    if (ang === "" || pl === "") {
      return;
    }
  
    const obj = {
      po_angielsku: ang,
      po_polsku: pl,
    };
    const useremail = session?.user?.email as string
    setObject(obj), await createRecordAction(obj,useremail);
    formRef.current?.reset();
  }
  async function actionNotLogded(data:FormData) {
    const ang = data.get("AngWord")?.toString()!;
    const pl = data.get("PolWord")?.toString()!;
    if (ang === "" || pl === "") {
      return;
    }
    const obj = {
      po_angielsku: ang,
      po_polsku: pl,
    };
    setObject(obj);
    formRef.current?.reset();
    formRef.current?.after('zaloguj sie (UCZEŃ) aby zapisać w bazie danych')
  }
  if (status === "authenticated") {
    return (
      <>
        <form action={action}  ref={formRef} className='flex flex-col py-10'>
          <h1 className='text-center'>Wpisz słowo po angielski i polsku</h1>
          <div className='flex md:flex-row mx-auto flex-col gap-3 justify-center mt-5 mb-5 '>
            <input
              type='text'
              placeholder='po angielsku'
              name='AngWord'
              spellCheck = 'true'
              className='input input-bordered input-primary w-full max-w-xs'
            />
            <input
              type='text'
              placeholder='po polsku'
              name='PolWord'
              spellCheck= 'true'
              className='input input-bordered input-accent w-full max-w-xs'
            />
          </div>
          <button className='btn btn-primary mx-4 '>
            Zapisz słowo
            <FiPlusSquare />
          </button>
        </form>
        {object.po_angielsku != "" ? <Tabela name={[...lastWords]} /> : ""}
      </>
    );
  }

  return (
    <>
        <form action={actionNotLogded} ref={formRef} className='flex flex-col py-10'>
          <h1 className='text-center'>Wpisz słowo po angielski i polsku</h1>
          <div className='flex md:flex-row mx-auto flex-col gap-3 justify-center mt-5 mb-5 '>
            <input
              type='text'
              placeholder='po angielsku'
              name='AngWord'
              className='input input-bordered input-primary w-full max-w-xs'
            />
            <input
              type='text'
              placeholder='po polsku'
              name='PolWord'
              className='input input-bordered input-accent w-full max-w-xs'
            />
          </div>
          <button className='btn btn-primary mx-4 '>
            Zapisz słowo
            <FiPlusSquare />
          </button>
        </form>
        {object.po_angielsku != "" ? <Tabela name={[...lastWords]} /> : ""}
      </>
  )
};
export default InputForm;
