'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ButtonTabela } from "./Button"

interface Islowo{
    slowo:string
    translation: (slowo:string) => {}
}
export const ButtonVoice = ({slowo,translation}:Islowo) => {
    const [dzwiek,setdzwiek] = useState('/slownik')
    const router = useRouter()
    const isMounted = useRef(false);
    async function speak(slowo:string) {
        const tra = await translation(slowo) as string
        await setdzwiek(tra)
        console.log(tra);
      } 

        useEffect(() => {
        if (!isMounted.current) {
          isMounted.current = true;
          return
        }
        // Specify the width and height of the window in pixels
    let width = 400
    let height = 300

    // Calculate the position of the window relative to the screen
    let left = (screen.width - width) /0.3
    let top = (screen.height - height) / 2

    // Create a string with the window features
    let features = `width=${width},height=${height},left=${left},top=${top}`
        // router.push(dzwiek)
        window.open(dzwiek,'_blank',features)
},[dzwiek])
    return ( 
      <div className="flex gap-10">
      <button className='btn btn-info  bg-green-300 hover:bg-green-500 m-1' onClick={() => {speak(slowo)}}>🗣️</button>
      <ButtonTabela kang= {slowo} />
      {/* <button onClick={}>usuń</button> */}
      {/* <Link href={dzwiek}>link</Link> */}
      </div>
     );
  }