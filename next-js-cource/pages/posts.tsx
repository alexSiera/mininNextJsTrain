import { NextPage } from "next";
import Link from "next/link";

import { MainLayout } from "../components/MainLayout";
import { Post } from "./post/[id]";

type PostsProps = {
  posts: Post[];
};

const Posts: NextPage<PostsProps> = ({ posts }) => {
  // const [posts, setPosts] = useState<Post[]>([]);

  // Async loading data not working well with SSR
  // useEffect(() => {
  //   async function load() {
  //     const data = await fetch("http://localhost:4200/posts");
  //     const json: Post[] = await data.json();
  //     setPosts(json);
  //   }
  //   load();
  // }, []);

  return (
    <MainLayout>
      {/* <Head>
        <title>Post page next js cource</title>
      </Head> */}
      <h1>posts Page</h1>
      <ul>
        {posts.map(({ id, title, body }) => (
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
Posts.getInitialProps = async () => {
  const data = await fetch("http://localhost:4200/posts");
  const posts: Post[] = await data.json();
  return { posts };
};

// /posts
// /post/42
