import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import GitHubProviders from "next-auth/providers/github";
// import clientPromise from "../mongodb";

export default NextAuth({
  providers: [
    GitHubProviders({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // session: {
  //   jwt: true,
  // },
  // jwt: {
  //   secret: "randomsecretkey",
  // },
  // adapter: MongoDBAdapter(clientPromise),
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user && token) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   async session(session, token) {
  //     if (session && token) session.user.id = token.id;
  //     return session;
  //   },
  // },
});
