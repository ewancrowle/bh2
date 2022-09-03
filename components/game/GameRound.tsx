import React, { useEffect } from "react";
import { Game } from "../../libs/gameState";
import { useReadChannelState } from "@onehop/react";

export const GameRound: React.FC<{
  game: Game;
}> = ({ game }, children) => {
  return (
    <div>
      ROUND <br></br>
      {JSON.stringify(game)}
    </div>
  );
};
