import { NextApiRequest, NextApiResponse } from "next";

import { hop } from "../../libs/hop";
import { ChannelType } from "@onehop/js";
import { Player, PlayerToken } from "../../libs/player";
import { Game } from "../../libs/gameState";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { name, playerToken }: { name: string; playerToken?: PlayerToken } =
    req.body;
  if (!name) {
    return res.status(400).send("You didn't pick a name");
  }

  // Generate 4 digit game code and create a hop channel
  const generatedCode = (Math.floor(Math.random() * (0xffff - 0x1000)) + 0x1000)
    .toString(16)
    .toUpperCase();
  const gameChannelId = `game-${generatedCode}`;

  // User object for host
  const user: Player = {
    name: name,
    color: Math.floor(Math.random() * 16777215).toString(16),
  };

  const channel = await hop.channels.create<Game>(
    ChannelType.PUBLIC,
    gameChannelId,
    {
      state: {
        host: name,
        state: "WAITING_LOBBY",
        players: [user],

        points: { [name]: 0 },
      },
    }
  );

  // Generate token for user and add to game channel
  if (!playerToken) {
    playerToken = (await hop.channels.tokens.create()).id;
  }
  await hop.channels.subscribeToken(gameChannelId, playerToken);

  res.json({
    userId: playerToken,
    player: user,
    game: {
      gameId: gameChannelId,
      gameCode: generatedCode,
    },
  });
}
