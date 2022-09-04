import React from "react";
import {Game} from "../../libs/gameState";
import {useReadChannelState} from "@onehop/react";
import {GameLobby} from "./GameLobby";
import {GameRoundCardSelection} from "./GameRoundCardSelection";
import {GameRound} from "./GameRound";

export const GameContent: React.FC<{
    gameId: string;
}> = ({gameId}, children) => {
    const {state, error, subscription} = useReadChannelState<Game>(
        `game-${gameId}`
    );

    return <GameRound game={state}/>;

    switch (subscription) {
        case "available": {
            switch (state.state) {
                case "WAITING_LOBBY": {
                    return <GameLobby game={state} code={gameId}/>;
                }
                case "ROUND_CARD_SELECTION": {
                    return <GameRoundCardSelection game={state}/>;
                }
                case "ROUND_IN_PROGRESS": {
                    return <GameRound game={state}/>;
                }
                case "ROUND_JUDGING": {
                    return;
                }
                case "ROUND_RESULT": {
                    return;
                }
                case "ENDED": {
                    return;
                }
            }
        }
        default: {
            return <p className="animate-pulse">Loading</p>;
        }
    }


};
