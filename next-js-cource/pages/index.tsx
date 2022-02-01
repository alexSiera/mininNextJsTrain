import Link from "next/link";

import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title="Next js App">
      {/* <Head>
        <title>Next js app</title>
      </Head> */}
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
    </MainLayout>
  );
}
