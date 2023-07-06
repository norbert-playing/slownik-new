"use client";


import { useSession } from "next-auth/react"
import GetSesionProvider from "./SessionProvider";


export const Profile = () => {
  const { data: session } = useSession()
  const user ={...session}
  return (
    <GetSesionProvider>

    <>
      <h1>Profile</h1>
      <p>Name: {user.user?.name}</p>
      <p>Email: {user.user?.email}</p>
      <img src={user.user?.image!} alt="Profile picture" />
    </>
    </GetSesionProvider>
  )
}
