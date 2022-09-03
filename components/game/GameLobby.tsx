import React, { useEffect } from "react";
import { Game } from "../../libs/gameState";
import { useReadChannelState } from "@onehop/react";

export const GameContent: React.FC<{
  game: Game;
}> = ({ game }, children) => {
  return (
    <div>
      LOBBY <br></br>
      {JSON.stringify(game)}
    </div>
  );
};
