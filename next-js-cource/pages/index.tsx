import Link from "next/link";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Next js app</title>
        <meta name="keywords" content="next, js, nextjs, react" />
        <meta name="description" content="this is youtube lesson" />
        <meta charSet="utf-8" />
      </Head>
      <h1>Hello Next.js</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        unde? Eos ab fuga cumque. Deleniti, temporibus error. Laborum expedita,
        dolores exercitationem tenetur, blanditiis nisi illum velit et minima
        sunt dolorum.
      </p>
    </>
  );
}
