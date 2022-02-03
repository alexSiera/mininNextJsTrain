import { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNprogress color="yellow" />
      <Component {...pageProps} />
      {/* <style jsx global>
        {`
          body {
            font-family: "Roboto", sans-serif;
          }
        `}
      </style> */}
    </>
  );
};

export default MyApp;
