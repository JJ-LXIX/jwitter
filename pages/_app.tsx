import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";
import Modal from "../Components/Modal";
import LoginModal from "../Components/modals/LoginModal";
import RegisterModal from "../Components/modals/RegisterModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Modal isOpen title="test modal" /> */}
      <LoginModal />
      <RegisterModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
