import Link from "next/link";
import {useRouter} from "next/router";
import {usePlayerToken} from "../hooks/usePlayerToken";
import {useGameId} from "../hooks/useGameId";
import Canvas from "../components/Canvas";
import Field from "../components/form/Field";
import Button from "../components/form/Button";
import onSubmitHost from "../libs/formHandlers/onSubmitHost";

export default function Home() {
    const router = useRouter();
    const {setPlayerToken} = usePlayerToken();
    const {setGameId} = useGameId();

    return (
        <Canvas>
            <form
                className="p-8 bg-gray-800 mt-2 rounded-lg"
                onSubmit={onSubmitHost({router, setPlayerToken, setGameId})}
            >
                <Field label="your name" maxLength={12} name="name" type="text"
                       placeholder="hop" className="lowercase"/>
                <div className="flex gap-2">
                    <Button className="w-2/3">
                        host
                    </Button>
                    <Link href="/">
                        <a className="text-center text-white font-bold bg-purple-500 rounded-lg w-1/3 py-2 px-4 hover:bg-purple-600 uppercase text-sm">
                            join
                        </a>
                    </Link>
                </div>
            </form>
        </Canvas>
    );
}
