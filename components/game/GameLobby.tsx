import React from "react";
import {Game} from "../../libs/gameState";
import {Players} from "./Players";
import Button from "../form/Button";

export const GameLobby: React.FC<{
    game: Game;
    code: string;
}> = ({game, code}) => {
    const currentPlayer = game.players[0];

    return (
        <div className="gap-12 flex flex-col">
            <p className="text-4xl font-bold text-center animate-pulse">waiting for
                host</p>
            <Players players={game.players}/>

            <div className="bg-gray-700 p-6 px-24 rounded-lg">
                <p className="text-sm uppercase font-bold text-center">how to play</p>
                <ul className="list-disc">
                    <li>each player is given a set of cards</li>
                    <li>the player in turn chooses a prompt card</li>
                    <li>each player must put forward a card that they think is most suitable to complete
                        the blank with
                    </li>
                    <li>the player who has the most votes for best card, wins</li>
                </ul>
            </div>

            {
                game.host === currentPlayer.name ?
                    (
                        <div className="bg-gray-700 p-6 px-24 rounded-lg">
                            <p className="text-sm uppercase font-bold text-center mb-6">host menu</p>
                            <div className="grid gap-6 grid-cols-4">
                                {
                                    game.players.length < 4 ?
                                        <Button disabled>not enough players</Button>
                                        :
                                        <Button>start game</Button>
                                }
                                <Button>end game</Button>
                                <div onClick={(e) => {
                                    navigator.clipboard.writeText(`bh2.vercel.app/game/${code}`);
                                }}><Button>copy link</Button></div>
                            </div>
                        </div>
                    ) : false
            }
        </div>
    );
};
