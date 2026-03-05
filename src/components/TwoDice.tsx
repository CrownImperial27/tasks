import React, { useState } from "react";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [diceLeft, setDiceLeft] = useState<number>(2);
    const [diceRight, setDiceRight] = useState<number>(4);

    return (
        <div>
            <button
                onClick={() => {
                    setDiceLeft(d6());
                }}
            >
                Roll Left
            </button>

            <button
                onClick={() => {
                    setDiceRight(d6());
                }}
            >
                Roll Right
            </button>

            <span data-testid="left-die">{diceLeft}</span>
            <span data-testid="right-die">{diceRight}</span>

            {diceLeft === diceRight ?
                diceLeft === 1 ?
                    "Lose"
                :   "Win"
            :   ""}
        </div>
    );
}
