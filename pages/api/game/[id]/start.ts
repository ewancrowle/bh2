import { NextApiRequest, NextApiResponse } from "next";
import { Game } from "../../../../libs/gameState";
import { hop } from "../../../../libs/hop";
import { Player, PlayerToken } from "../../../../libs/player";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id: gameId } = req.query;
  const { playerToken }: { playerToken: PlayerToken } = req.body;

  if (!playerToken) {
    return res.status(400).send("Missing player token");
  }

  console.log("AAx");
  const gameChannel = await hop.channels.get(`game-${gameId}`);
  console.log("AA");
  const state = (await hop.channels.tokens.get(playerToken))?.state as Player;
  console.log("BBB");
  const gameState = gameChannel?.state as Game;

  console.log("ABCGOO");
  if (!gameState) {
    return res.status(404).send("Invalid game code");
  }

  if (!state) {
    return res.status(404).send("Invalid player token");
  }

  if (gameState.host !== state.name) {
    return res.status(403).send("Only the host can start the game.");
  }

  console.log("GOO");
  hop.channels.patchState<Game>(gameChannel, (state) => ({
    ...state,
    state: "ROUND_IN_PROGRESS",
  }));
  //gameChannel.patchState({ state: "ROUND_IN_PROGRESS" });

  res.json({
    success: true,
  });
}
