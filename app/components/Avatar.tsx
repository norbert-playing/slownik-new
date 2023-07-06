"use client";
import { authoption } from "@/lib/authoptions";
import { getServerSession } from "@/lib/serversesion";
import { cookies, headers } from "next/headers";
import { getServerSession as originalGetServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { SessionProvider, useSession } from "next-auth/react";
import GetSesionProvider from "./SessionProvider";

export const Avatar = () => {
  const { data: sesia } = useSession();
  const user = { ...sesia };
  return (
    <GetSesionProvider>
      <>
        <div className='avatar mx-auto'>
          <div className='w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img src={user.user?.image as unknown as string} alt='..' />
          </div>
        </div>
      </>
    </GetSesionProvider>
  );
};

export default Avatar;
