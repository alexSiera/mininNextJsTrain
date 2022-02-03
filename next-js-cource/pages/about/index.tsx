import Router from "next/router";

import { MainLayout } from "../../components/MainLayout";
import { NextPage } from "next";

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
  const res = await fetch("http://localhost:4200/about");
  const { title } = await res.json();
  return {
    title,
  };
};
