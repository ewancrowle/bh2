import React from 'react';
import Head from "next/head";

function Canvas(props) {
    return (
        <>
            <Head>
                <title>what the deck</title>
                <meta
                    name="description"
                    content="BuilderHacks 2 by Ewan C and Nick C"
                />
            </Head>
            <main className="min-h-screen bg-gray-900 flex justify-center items-center text-white lowercase">
                {props.children}
            </main>
        </>
    );
}

export default Canvas;