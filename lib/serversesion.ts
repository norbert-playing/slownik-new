import { cookies, headers } from 'next/headers';
import { getServerSession as originalGetServerSession } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export const getServerSession = async () => {
  const req = {
    headers: Object.fromEntries(headers() as Headers),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value]),
    ),
  };
  const res = { getHeader() {}, setCookie() {}, setHeader() {} };
  const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
      ],
  }

  // @ts-ignore - The type used in next-auth for the req object doesn't match, but it still works 
  const session = await originalGetServerSession(req, res, authOptions);
  return session;
};
