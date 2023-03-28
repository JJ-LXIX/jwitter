import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";
import Modal from "../Components/Modal";
import LoginModal from "../Components/modals/LoginModal";
import RegisterModal from "../Components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {/* <Modal isOpen title="test modal" /> */}
      <Toaster />
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
