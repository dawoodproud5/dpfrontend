import "../styles/globals.css";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import WhatsAppFloatingButton from "../../components/WhatsAppFloatingButton";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,

  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Dawood Proud</title>
      </Head>

      <ToastContainer />
      <Component {...pageProps} />
      <WhatsAppFloatingButton />
    </SessionProvider>
  );
}
