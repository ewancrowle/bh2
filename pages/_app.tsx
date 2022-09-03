import {hop} from "@onehop/client";
import type {AppProps} from "next/app";
import "../styles/globals.css";
import React, {useEffect} from "react";
import {usePlayerToken} from "../hooks/usePlayerToken";

function MyApp({Component, pageProps}: AppProps) {
    const {playerToken} = usePlayerToken();
    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        hop.init({
            projectId: "project_NDc4MjMzMDA3NDE4NTMyMzM", // replace with your project ID
            token: playerToken
        });
    }, [playerToken]);

    return <Component {...pageProps} />;
}

export default MyApp;
