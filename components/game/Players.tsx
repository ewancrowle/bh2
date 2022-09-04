import React from 'react';
import {Player} from "../../libs/player";

export const Players: React.FC<{
    players: Player[];
}> = ({players}) => {
    return (
        <div className="flex gap-6 justify-center">
            {players.map((p) => {
                return (
                    <div key={p.name}>
                        <div className="justify-center items-center flex" style={{
                            height: 100,
                            width: 100,
                            backgroundColor: `#${p.color}`,
                            borderRadius: 100 / 2,

                        }}>
                            {p.name.slice(0, 2)}
                        </div>
                        <p className="mt-2 text-center">{p.name}</p>
                    </div>
                );
            })}
        </div>
    );
};
