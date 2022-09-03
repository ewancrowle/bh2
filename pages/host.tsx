import Head from "next/head";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { Player } from "../libs/player";
import { usePlayerToken } from "../hooks/usePlayerToken";
import { useGameId } from "../hooks/useGameId";

export default function Home() {
  const router = useRouter();
  const { setPlayerToken } = usePlayerToken();
  const { setGameId } = useGameId();
  return (
    <div>
      <Head>
        <title>what the deck</title>
        <meta
          name="description"
          content="BuilderHacks 2 by Ewan Crowle and Nick Ciardiello"
        />
      </Head>
      <main className="min-h-screen bg-gray-900 flex justify-center items-center text-gray-300">
        <div className="">
          <div className="flex justify-center">
            <p className="text-5xl font-bold">what the deck</p>
            <p className="text-gray-600 ml-2">beta</p>
          </div>
          <p className="text-gray-600">a game by ewan and nick</p>
        </div>

        <form
          className="px-24 items-center"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as any;
            fetch(`./api/host`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: form.name.value,
              }),
            })
              .then(async (res) => {
                if (!res.ok) {
                  /**
                   * If the server gives a status code other than 2xx,
                   * throw an error.
                   */
                  const text = await res.text();
                  console.error(text);
                  return;
                }

                const data: {
                  userId: string;
                  player: Player;
                  game: {
                    gameId: string;
                    gameCode: string;
                  };
                } = await res.json();

                setPlayerToken(data.userId);
                setGameId(data.game.gameId);

                console.log(`New game ${data.game.gameCode}`);
                console.log(data);
                await router.push(`/game/${data.game.gameCode}`);
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        >
          <div className="mb-6">
            <label className="font-bold" htmlFor="inline-full-name">
              enter your name
            </label>
            <input
              maxLength={12}
              name="name"
              className="bg-gray-200 appearance-none lowercase border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="joe"
            />
          </div>
          <div className="flex">
            <button className="text-gray-700 font-bold bg-gray-800 rounded w-2/3 py-2 px-4">
              host
            </button>
            <Link href="/">
              <a className="text-purple-500 text-sm font-bold text-right w-1/3">
                or join one
              </a>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
