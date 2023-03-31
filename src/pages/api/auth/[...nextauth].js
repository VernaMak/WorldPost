import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import { prisma } from "../../../server/db/client"

console.log(process.env.GITHUB_ID);
console.log(process.env.GITHUB_SECRET);

export const authOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)