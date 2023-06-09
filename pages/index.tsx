import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../Components/Header";
import Form from "../Components/Form";
import PostFeed from "../Components/posts/PostFeed";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jwitter</title>
        <meta name="description" content="A fullstack twitter clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/goku.jpg" />
      </Head>

      <>
        <Header label="Home" />
        <Form placeholder="What's happening?" />
        <PostFeed />
      </>
    </>
  );
}
