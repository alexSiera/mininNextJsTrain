import { useRouter } from "next/router";

import { MainLayout } from "../../components/MainLayout";

export default function Post() {
  const router = useRouter();
  console.log(router, "router");
  return (
    <MainLayout title="Single post">
      <h1>Post: {router.query.id}</h1>
    </MainLayout>
  );
}
