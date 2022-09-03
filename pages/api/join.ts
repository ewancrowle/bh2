import { NextApiRequest, NextApiResponse } from "next";
import { publish } from "../../libs/gameEvents";
import { hop } from "../../libs/hop";
import { Player, PlayerToken } from "../../libs/player";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let {
    name,
    playerToken,
    code,
  }: { name: string; playerToken?: PlayerToken; code: string } = req.body;

  if (!name) {
    return res.status(400).send("You didn't pick a name");
  }

  if (!code) {
    return res.status(400).send("You didn't specify a game id to join.");
  }

  /**
   * Check if the game is online
   */
  const gameChannelId = `game-${code}`;
  const gameChannel = await hop.channels.get(gameChannelId);
  if (!gameChannel?.state) {
    return res.status(404).send("Game code not found.");
  }

  /**
   * Set up a new user
   */
  const user: Player = {
    name: name,
    color: Math.floor(Math.random() * 16777215).toString(16),
  };

  // Generate token for user and add to game channel
  if (!playerToken) {
    playerToken = (await hop.channels.tokens.create()).id;
  }
  await hop.channels.subscribeToken(gameChannelId, playerToken);

  res.json({
    userId: playerToken,
    game: {
      gameId: gameChannelId,
      gameCode: code,
    },
    player: user,
  });

  publish(gameChannelId, "PLAYER_JOIN", user);
}
