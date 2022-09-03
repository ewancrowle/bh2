import React, { useEffect } from "react";
import { Game } from "../../libs/gameState";
import { useReadChannelState } from "@onehop/react";

export const GameEnd: React.FC<{
  game: Game;
}> = ({ game }, children) => {
  return (
    <div>
      END <br></br>
      {JSON.stringify(game)}
    </div>
  );
};
