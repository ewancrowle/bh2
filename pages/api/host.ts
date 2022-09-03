import {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../libs/prisma";
import {hop} from "../../libs/hop";
import {ChannelType} from "@onehop/js";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    /**
     * Read the data sent to the server when a user uses
     * the host form.
     */
    const {name}: {name: string} = req.body;

    /**
     * If the `name` key is not in the body, the server uses
     * the `400` code to warn the host that the body is invalid.
     */
    if (!name) {
        return res.status(400).send("Body has no name key.");
    }

    /**
     * Set up a new user
     */
    const user = await prisma.user.create(
        {
            data: {
                name: name,
                color: Math.floor(Math.random() * 16777215).toString(16),
            }
        }
    )

    /**
     * Use Hop to make a new channel!
     */
    const chan = await hop.channels.create(ChannelType.PUBLIC);

    /**
     * Set up a new game
     */
    const game = await prisma.game.create(
        {
            data: {
                name: `${name}'s game`,
                hostId: user.id,
                /**
                 * Base16 in the range 0x1000 to 0xFFFF so that
                 * you are given a [A-F,0-9] 16-bit String
                 * e.g 52E2, D21C, 4B2E
                 */
                code: (Math.floor(Math.random() * (0xFFFF - 0x1000)) + 0x1000).toString(16).toUpperCase(),
                hopChannelID: chan.id
            }
        }
    )

    res.json({
        userId: user.id,
        gameId: game.id,
        gameCode: game.code,
    });
}