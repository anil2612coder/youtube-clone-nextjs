import prisma from "@/database/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import NextAuth from 'next-auth'

export const authOptions:NextAuthOptions = {
    adapter:PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
      ],
      pages:{
        signIn:"/"
      },
      debug: process.env.NODE_ENV === "development",
      session: {
        strategy: "jwt",
      },
      secret: process.env.NEXTAUTH_SECRET,
    };
    
    const handler = NextAuth(authOptions);
    
    export { handler as GET, handler as POST };