import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";
import Modal from "../Components/Modal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Modal isOpen title="test modal" /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
