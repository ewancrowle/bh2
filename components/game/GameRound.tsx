import React from "react";
import {Game} from "../../libs/gameState";

export const GameRound: React.FC<{
    game: Game;
}> = ({game}, children) => {
    return (
        <div className="gap-12 flex flex-col">
            <p className="text-4xl font-bold text-center">round {game.roundCount}</p>
            <p className="text-center">{game.players[0].name}&apos;s turn</p>
            <div className="flex justify-center">
                <div className="w-fit p-8 py-28 bg-gray-700 rounded-xl text-white font-bold -rotate-6">
                    <p>Honey, I shrunk</p>
                    <p className="animate-pulse">_________</p>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="p-8 py-28 bg-white rounded-xl text-gray-700 font-bold rotate-2">
                    <p>my will to live</p>
                </div>
                <div className="p-8 py-28 bg-white rounded-xl text-gray-700 font-bold -rotate-3">
                    <p>mom</p>
                </div>
                <div className="p-8 py-28 bg-white rounded-xl text-gray-700 font-bold rotate-12">
                    <p>inflation</p>
                </div>
                <div className="p-8 py-28 bg-white rounded-xl text-gray-700 font-bold rotate-6">
                    <p>my package.json</p>
                </div>
                <div className="p-8 py-28 bg-white rounded-xl text-gray-700 font-bold -rotate-2">
                    <p>hop</p>
                </div>
                <div className="p-8 py-28 bg-white rounded-xl text-gray-700 font-bold rotate-3">
                    <p>e</p>
                </div>
            </div>
        </div>
    );
};
