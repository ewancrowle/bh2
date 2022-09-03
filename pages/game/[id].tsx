import { useReadChannelState } from "@onehop/react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { GameContent } from "../../components/game/GameContent";
import { useGameId } from "../../hooks/useGameId";
import { Game } from "../../libs/gameState";

export default function GamePage(props) {
  const router = useRouter();
  const { id: gameId } = router.query;
  return (
    <div>
      <Head>
        <title>what the deck</title>
        <meta
          name="description"
          content="BuilderHacks 2 by Ewan Crowle and Nick Ciardiello"
        />
      </Head>
      <main className="min-h-screen bg-gray-900 flex justify-center items-center space-x-4 text-gray-300">
        <div className="">
          <div className="flex justify-center">
            <p className="text-5xl font-bold">what the deck</p>
            <p className="text-gray-600 ml-2">beta</p>
          </div>
          <p className="text-gray-600">a game by ewan and nick</p>
        </div>

        <div className="items-center">
          <GameContent gameId={gameId as string}></GameContent>
        </div>
      </main>
    </div>
  );
}
