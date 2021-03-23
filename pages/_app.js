import React, { useEffect, useState } from "react";
import Head from "next/head";
import xw from "xwind";

import { Global } from "@emotion/react";

import Navigation from "../components/Navigation/Navigation";
import PageTitle from "../components/PageTitle";
import PageBody from "../components/PageBody";
import { UserContext } from "../lib/context";
import useAuth from "../hooks/useAuth";

function App({ Component, pageProps }) {
  const { user, loading } = useAuth();
  return (
    <UserContext.Provider value={{ user }}>
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
    </UserContext.Provider>
  );
}

export default App;
