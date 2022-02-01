import Head from "next/head";

import { MainLayout } from "../components/MainLayout";

export default function Posts() {
  return (
    <MainLayout>
      <Head>
        <title>Post page next js cource</title>
      </Head>
      <h1>posts Page</h1>
    </MainLayout>
  );
}

// /posts
// /post/42
