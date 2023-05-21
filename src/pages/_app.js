import "../styles/globals.css";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from '@vercel/analytics/react';
import WhatsAppFloatingButton from "../../components/WhatsAppFloatingButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dawood Proud</title>
      </Head>

      <ToastContainer />
      <Component {...pageProps} />
      <Analytics />
      <WhatsAppFloatingButton />
    </>
  );
}
