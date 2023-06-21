import Image from "next/image";
import InputForm from "./components/InputForm";
import { createContext, useContext } from "react";

import Tabela from "./components/Tabela";
import { deleteRecordAction } from "./_action";

export default async function Home() {
  return (
    <main className='max-w-4xl mx-auto mt-4 bg-gray-300 '>
      <InputForm />
    </main>
  );
}
