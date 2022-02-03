import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MainLayout } from "../components/MainLayout";
import { Post } from "./post/[id]";

type PostsProps = {
  posts: Post[] | null;
};

const Posts: NextPage<PostsProps> = ({ posts: serverPosts }) => {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    const load = async () => {
      const data = await fetch("http://localhost:4200/posts");
      const posts: Post[] = await data.json();
      setPosts(posts);
    };
    if (!serverPosts) load();
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <div>Loading...</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* <Head>
        <title>Post page next js cource</title>
      </Head> */}
      <h1>posts Page</h1>
      <ul>
        {posts?.map(({ id, title, body }) => (
          <li key={id}>
            <Link as={`/post/${id}`} href={`/post/[id]`}>
              <a>{title}</a>
            </Link>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export default Posts;

// This method is using for initial loading some data in a server...
Posts.getInitialProps = async ({ req }) => {
  if (!req) return { posts: null };
  const data = await fetch("http://localhost:4200/posts");
  const posts: Post[] = await data.json();
  return { posts };
};

// /posts
// /post/42
