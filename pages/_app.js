import Head from "next/head";
import { Global } from "@emotion/react";
import xw from "xwind";
import Navigation from "../components/Navigation/Navigation";
import PageTitle from "../components/PageTitle";
import PageBody from "../components/PageBody";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Variable Scoop References</title>
      </Head>
      <Global
        //tailwind base styles + keyframes + ring and shadow classes variables  ... to global styles
        styles={xw`XWIND_BASE XWIND_GLOBAL`}
      />
      <Navigation />
      <PageTitle />
      <PageBody>
        <Component {...pageProps} />
      </PageBody>
    </>
  );
}

export default App;
