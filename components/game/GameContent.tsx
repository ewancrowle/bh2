import React, { useEffect } from "react";
import { Game } from "../../libs/gameState";
import { useReadChannelState } from "@onehop/react";

export const GameContent: React.FC<{
  gameId: string;
}> = ({ gameId }, children) => {
  const { state, error, subscription } = useReadChannelState<Game>(
    `game-${gameId}`
  );

  return (
    <div>
      <p>{gameId + ""}</p>
      <p>State: {JSON.stringify(state)}</p>
      <p>Error: {JSON.stringify(error)}</p>
      <p>Subscription: {JSON.stringify(subscription)}</p>
    </div>
  );
};
