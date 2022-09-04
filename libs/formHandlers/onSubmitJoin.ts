import {FormEvent} from 'react';
import Cookies from "js-cookie";

export default function onSubmitJoin(props) {
    return (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as any;
        fetch(`http://localhost:3000/api/join`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: form.name.value,
                code: form.code.value,
            }),
        })
            .then(async (res) => {
                if (!res.ok) {
                    /**
                     * If the server gives a status code other than 2xx,
                     * throw an error.
                     */
                    const text = await res.text();
                    console.error(text);
                    return;
                }

                const data: {
                    userId: string;
                    gameId: string;
                } = await res.json();

                Cookies.set("_uid", data.userId, {
                    expires: 1,
                });

                Cookies.set("_gid", data.gameId, {
                    expires: 1,
                });

                await props.router.push("/game");
            })
            .catch((e) => {
                console.log(e);
            });
    };
}