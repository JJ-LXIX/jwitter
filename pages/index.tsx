import Head from "next/head";
import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jwitter</title>
        <meta name="description" content="A fullstack twitter clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1 className="text-2xl text-sky-600">Hello World!</h1>
        </div>
      </main>
    </>
  );
}
