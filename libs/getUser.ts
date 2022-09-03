import prisma from "./prisma";
import {IncomingMessage} from "http";
import {NextApiRequestCookies} from "next/dist/server/api-utils";

export default async function getUser(
    req: IncomingMessage & { cookies: NextApiRequestCookies }
) {
    const {_uid: uid} = req.cookies;

    if (!uid) return undefined;

    try {
        const user = await prisma.user.findUnique({
            where: {id: uid},
        });

        return user;
    } catch (error) {
        return undefined;
    }
}