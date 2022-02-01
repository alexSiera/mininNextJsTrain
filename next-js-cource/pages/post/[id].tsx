import { NextPage } from "next";
import Link from "next/link";

import { MainLayout } from "../../components/MainLayout";

export type Post = {
  id: number;
  title: string;
  body: string;
};

type PostProps = {
  post: Post;
};

const Post: NextPage<PostProps> = ({ post }) => {
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

Post.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await fetch(`http://localhost:4200/posts/${id}`);
  const post: Post = await res.json();
  return { post };
};
