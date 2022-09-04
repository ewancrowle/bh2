import Link from "next/link";
import {useRouter} from "next/router";
import Canvas from "../components/Canvas";
import Field from "../components/form/Field";
import Button from "../components/form/Button";
import onSubmitJoin from "../libs/formHandlers/onSubmitJoin";

export default function Home() {
    const router = useRouter();

    return (
        <Canvas>
            <form
                className="p-8 bg-gray-800 mt-2 rounded-lg"
                onSubmit={onSubmitJoin({router})}
            >
                <Field label="your name" maxLength={12} name="name" type="text"
                       placeholder="hop" className="lowercase"/>

                <Field label="game code" maxLength={4} name="code" type="text"
                       placeholder="J93X" className="uppercase"/>
                <div className="flex gap-2">
                    <Button className="w-2/3">
                        join
                    </Button>
                    <Link href="/host">
                        <a className="text-center text-white font-bold bg-purple-500 rounded-lg w-1/3 py-2 px-4 hover:bg-purple-600 uppercase text-sm">
                            host
                        </a>
                    </Link>
                </div>
            </form>
        </Canvas>
    );
}
