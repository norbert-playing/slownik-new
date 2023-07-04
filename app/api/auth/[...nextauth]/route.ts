import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { authoption } from "@/lib/authoptions";
import type { Adapter } from "next-auth/adapters"

const prism = new PrismaClient();



const handler = NextAuth(authoption)

export { handler as GET, handler as POST }