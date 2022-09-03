import type { AppProps } from "next/app";
import "../styles/globals.css";
import React, { useEffect } from "react";
import { useInit } from "@onehop/react";

function MyApp({ Component, pageProps }: AppProps) {
  // Initialize hop
  useInit({
    projectId: "project_NTA2MzczMDA1MDc5ODM4NzU",
    //token:
    //  "leap_token_c181MzBhYzdjODgzNzI4Y2NhN2VkZmUyOWNjZTAxN2Q4Nl81MDY3MzIxODQ5NjM3NzAwOA",
  });

  return <Component {...pageProps} />;
}

export default MyApp;
