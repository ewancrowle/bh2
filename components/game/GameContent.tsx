import React, { useEffect } from "react";
import { Game } from "../../libs/gameState";
import { useReadChannelState } from "@onehop/react";
import { GameLobby } from "./GameLobby";
import { GameEnd } from "./GameEnd";
import { GameRound } from "./GameRound";

export const GameContent: React.FC<{
  gameId: string;
}> = ({ gameId }, children) => {
  const {
    state: game,
    error,
    subscription,
  } = useReadChannelState<Game>(`game-${gameId}`);

  if (!game) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {JSON.stringify(error)}</h1>;
  }

  return (
    <>
      {game.state === "WAITING_LOBBY" ? (
        <GameLobby game={game} />
      ) : game.state === "ENDED" ? (
        <GameEnd game={game} />
      ) : (
        <GameRound game={game} />
      )}
      <div className="mt-10">
        <p>{gameId + ""}</p>
        <p>State: {JSON.stringify(game)}</p>
        <p>Error: {JSON.stringify(error)}</p>
        <p>Subscription: {JSON.stringify(subscription)}</p>
      </div>
    </>
  );
};
