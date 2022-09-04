import React from "react";
import {Game} from "../../libs/gameState";
import {Players} from "./Players";

export const GameRoundCardSelection: React.FC<{
    game: Game;
}> = ({game}, children) => {
    return (
        <div className="gap-12 flex flex-col">
            <p className="text-4xl font-bold text-center">round {game.roundCount}</p>
            <Players players={game.players}/>
            <p className="animate-pulse">{game.players[0].name} is choosing a card</p>
        </div>
    );
};
