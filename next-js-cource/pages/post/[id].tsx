import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { MainLayout } from "../../components/MainLayout";

export type Post = {
  id: number;
  title: string;
  body: string;
};

type PostProps = {
  post: Post | null;
};

const Post: NextPage<PostProps> = ({ post: serverPost = null }) => {
  const [post, setPost] = useState(serverPost);
  const { query } = useRouter();
  useEffect(() => {
    const load = async () => {
      const res = await fetch(`http://localhost:4200/posts/${query.id}`);
      const data: Post = await res.json();
      setPost(data);
    };
    if (!serverPost) load();
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Single post">
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href="/posts">
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  );
};

export default Post;

//Old method

// Post.getInitialProps = async ({ query, req }) => {
//   if (!req) {
//     return { post: null } as unknown as Post[];
//   }
//   const { id } = query;
//   const res = await fetch(`http://localhost:4200/posts/${id}`);
//   const post: Post = await res.json();
//   return { post };
// };

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post: Post = await res.json();

  return {
    props: { post },
  };
};
