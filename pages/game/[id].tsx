import {useRouter} from "next/router";
import Canvas from "../../components/Canvas";
import {GameContent} from "../../components/game/GameContent";

export default function GamePage(props) {
    const router = useRouter();
    return (
        <Canvas>
            <GameContent gameId={router.query.id as string}/>
        </Canvas>
    );
}
