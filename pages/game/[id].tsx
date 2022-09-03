import {GetStaticPaths, GetStaticProps} from "next";
import prisma from "../../libs/prisma";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = async () => {
    const codes = (await prisma.game.findMany({
        select: {
            code: true
        }
    })).map((c) => c.code)

    return {
        paths: codes.map((c) => ({params: {id: c}})),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const game = await prisma.game.findUnique({
        where: {
            code: context.params.id as string
        }
    })

    return {
        props: {
            game: {
                id: game.id,
                code: game.code,
                name: game.name
            },
        },
    };
};

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>what the deck</title>
                <meta name="description" content="BuilderHacks 2 by Ewan Crowle and Nick Ciardiello"/>
            </Head>
            <main className="min-h-screen bg-gray-900 flex justify-center items-center text-gray-300">
                <div className="">
                    <div className="flex justify-center">
                        <p className="text-5xl font-bold">what the deck</p>
                        <p className="text-gray-600 ml-2">beta</p>
                    </div>
                    <p className="text-gray-600">a game by ewan and nick</p>
                </div>

                <div className="px-24 items-center">
                    <p className="font-bold">
                        you&apos;re in
                    </p>
                    <p className="font-bold">
                        {props.game.name} ({props.game.code})
                    </p>
                </div>
            </main>
        </div>
    )
}
