import { hop } from "@onehop/client";
import { useEffect } from "react";
import { useGameId } from "../../hooks/useGameId";
import { usePlayerToken } from "../../hooks/usePlayerToken";
import { Game } from "../../libs/gameState";
import {
  useConnectionState,
  useLeap,
  useReadChannelState,
} from "@onehop/react";

export default function GameContent() {
  const { setPlayerToken } = usePlayerToken();
  const { setGameId } = useGameId();

  const { gameId } = useGameId();
  const { state, error, subscription } = useReadChannelState<Game>(gameId);

  return (
    <div>
      <p>State: {JSON.stringify(state)}</p>
      <p>Error: {JSON.stringify(error)}</p>
      <p>Subscription: {JSON.stringify(subscription)}</p>
    </div>
  );
}
