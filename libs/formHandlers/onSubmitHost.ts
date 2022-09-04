import {FormEvent} from 'react';
import {Player} from "../player";

function onSubmitHost(props) {
    return (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as any;
        fetch(`./api/host`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: form.name.value,
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
                    player: Player;
                    game: {
                        gameId: string;
                        gameCode: string;
                    };
                } = await res.json();

                props.setPlayerToken(data.userId);
                props.setGameId(data.game.gameId);

                console.log(`New game ${data.game.gameCode}`);
                console.log(data);
                await props.router.push(`/game/${data.game.gameCode}`);
            })
            .catch((e) => {
                console.log(e);
            });
    };
}

export default onSubmitHost;