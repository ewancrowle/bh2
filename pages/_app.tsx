import type { AppProps } from "next/app";
import "../styles/globals.css";
import React, { useEffect } from "react";
import { useInit } from "@onehop/react";
import { usePlayerToken } from "../hooks/usePlayerToken";
import { hop } from "@onehop/client";

function MyApp({ Component, pageProps }: AppProps) {
  const { playerToken } = usePlayerToken();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    hop.init({
      projectId: "project_NTA2MzczMDA1MDc5ODM4NzU",
      token: playerToken,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
