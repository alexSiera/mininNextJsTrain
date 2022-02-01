import Link from "next/link";

import classes from "../styles/error.module.scss";
import { MainLayout } from "../components/MainLayout";

const ErrorPage = () => {
  return (
    <MainLayout title="Error page">
      <h1 className={classes.error}>Error 404</h1>
      <p>
        Please
        <Link href="/">
          <a> go back </a>
        </Link>
        to safety
      </p>
    </MainLayout>
  );
};

export default ErrorPage;
