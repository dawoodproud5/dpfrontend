import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import url from "../../../../components/Assets/Api";
import axios from "axios";
import { toast } from "react-toastify";
import { setCookie } from "next-cookies";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session(session, user) {
      const name = session.session.user.name;
      const email = session.session.user.email;

      const obj = { email: email, name: name };
      await axios
        .post(`${url}/api/register/with/google`, obj)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });

      return session;
    },
  },
  // secret: process.env.JWT_SECRET,
});
