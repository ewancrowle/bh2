import {NextApiRequest, NextApiResponse} from "next";
import prisma from "../../libs/prisma";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    /**
     * Read the data sent to the server when a user uses
     * the join form.
     */
    const {name, code}: { name: string, code: string } = req.body;

    /**
     * If the `name` key is not in the body, the server uses
     * the `400` code to warn the host that the body is invalid.
     */
    if (!name) {
        return res.status(400).send("Body has no name key.");
    }

    /**
     * If the `code` key is not in the body, the server uses
     * the `400` code to warn the host that the body is invalid.
     */
    if (!code) {
        return res.status(400).send("Body has no name key.");
    }

    /**
     * Check if the game is online
     */
    const game = await prisma.game.findUnique({
        where: {
            code: code
        }
    });

    if (!game) {
        return res.status(404).send("Game code not found.");
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
    );

    res.json({
        userId: user.id,
        gameId: game.id,
    });
}