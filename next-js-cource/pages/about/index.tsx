import Router from "next/router";
import { NextPage } from "next";

import { MainLayout } from "../../components/MainLayout";

type AboutProps = {
  title: string;
};

const About: NextPage<AboutProps> = ({ title }) => {
  const linkClickHandler = () => {
    Router.push("/");
  };
  return (
    <MainLayout title="About Page">
      <h1>{title}</h1>
      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go to posts inline</button>
    </MainLayout>
  );
};

export default About;

About.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/about`);
  const { title } = await res.json();
  return {
    title,
  };
};
