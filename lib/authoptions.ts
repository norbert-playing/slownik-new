import GoogleProvider from "next-auth/providers/google";
import Adapters from "next-auth/adapters"
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";

const prisma = new PrismaClient();

export const authoption={
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
      ],

}