import React, { useEffect } from "react";
import { Game } from "../../libs/gameState";
import { useReadChannelState } from "@onehop/react";
import { usePlayerToken } from "../../hooks/usePlayerToken";

export const GameLobby: React.FC<{
  game: Game;
}> = ({ game }, children) => {
  const { playerToken } = usePlayerToken();
  return (
    <div>
      LOBBY <br></br>
      <button
        onClick={(e) => {
          e.preventDefault();
          const form = e.target as any;
          fetch(`/api/game/${game.id}/start`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              playerToken: playerToken,
            }),
          })
            .then(async (res) => {
              if (!res.ok) {
                const text = await res.text();
                console.error(text);
                return;
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        Start Game
      </button>
      {JSON.stringify(game)}
    </div>
  );
};
