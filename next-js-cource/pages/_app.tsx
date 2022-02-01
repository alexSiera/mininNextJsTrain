import { AppProps } from "next/app";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
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
