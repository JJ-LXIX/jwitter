import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../Components/Header";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jwitter</title>
        <meta name="description" content="A fullstack twitter clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LXIX.jpg" />
      </Head>

      <>
        <Header label="Home" />
      </>
    </>
  );
}
