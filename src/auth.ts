import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { getProfile } from "./actions/profile";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHubProvider, GoogleProvider],
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      // if (trigger === "update") {
      //   console.log("======= in update =====");
      //   console.log("token", token);
      //   console.log("user", user);
      //   console.log("session", session);
      //   console.log("======= in update =====");
      //   token = { ...token, ...session };
      // }
      if (trigger === "signIn" && user) {
        console.log("======= in signIn =====");
        console.log("token", token);
        console.log("user", user);
        console.log("======= in signIn =====");
        const profile = await getProfile(user);
      }
      return token;
    },
    session: async ({ session, token }) => {
      // session.user.jwtToken = token.jwtToken;
      // session.user.roles = token.roles;
      return session;
    },
    // here the user is authenticated, we can add more verification
    // to the user, like checking if the user is active, etc.
    // signIn: async ({ user, account }): Promise<boolean> => {
    //   console.log("sign in", user, account);
    //   return true;
    // },
  },
});
