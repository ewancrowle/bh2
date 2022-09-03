import {GetServerSidePropsContext} from "next";
import prisma from "../libs/prisma";
import Head from "next/head";
import getUser from "../libs/getUser";

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const game = await prisma.game.findUnique({
        where: {
            id: context.req.cookies._gid
        }
    });

    if (!game) {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
        };
    }

    const user = await getUser(context.req);

    return {
        props: {
            game: {
                id: game.id,
                code: game.code,
                name: game.name
            },
            user: {
                id: user.id,
                name: user.name,
                host: user.id === game.hostId,
            }
        },
    };
}

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
                        you&apos;re {props.user.host ? "hosting" : "in"}
                    </p>
                    <p className="font-bold">
                        {props.game.name} ({props.game.code})
                    </p>
                </div>
            </main>
        </div>
    );
}
