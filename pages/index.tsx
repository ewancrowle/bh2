import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
      <div>
          <Head>
              <title>what the deck</title>
              <meta name="description" content="BuilderHacks 2 by Ewan Crowle and Nick Ciardiello" />
          </Head>
          <main className="min-h-screen bg-gray-900 flex justify-center items-center text-gray-300">
              <div className="">
                  <div className="flex justify-center">
                      <p className="text-5xl font-bold">what the deck</p>
                      <p className="text-gray-600 ml-2">beta</p>
                  </div>
                  <p className="text-gray-600">a game by ewan and nick</p>
              </div>

              <form className="px-24 items-center">
                  <div className="mb-6">
                      <label className="font-bold" htmlFor="inline-full-name">
                          enter your name
                      </label>
                      <input maxLength={12}
                          className="bg-gray-200 appearance-none lowercase border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="joe"/>
                  </div>
                  <div className="mb-6">
                      <label className="font-bold" htmlFor="inline-full-name">
                          game code
                      </label>
                      <input maxLength={4}
                          className="bg-gray-200 appearance-none uppercase border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="J93X"/>
                  </div>
                  <div className="flex">
                      <button className="text-gray-700 font-bold bg-gray-800 rounded w-2/3 py-2 px-4">
                          join
                      </button>
                      <Link href="/host">
                          <a className="text-purple-500 text-sm font-bold text-right w-1/3">
                              or host one
                          </a>
                      </Link>
                  </div>
              </form>
          </main>
      </div>
  )
}
