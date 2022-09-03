import { hop } from "@onehop/client";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { usePlayerToken } from "../hooks/usePlayerToken";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useInit } from "@onehop/react";

function MyApp({ Component, pageProps }: AppProps) {
  // Initialize hop
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
