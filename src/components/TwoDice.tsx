import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const initialLeft = d6();
    let initialRight = d6();
    while (initialRight === initialLeft) {
        initialRight = d6();
    }
    const [diceleft, setDiceleft] = useState<number>(initialLeft);
    const [diceright, setDiceright] = useState<number>(initialRight);

    let message = "";
    if (diceleft === diceright) {
        message = diceleft === 1 ? "Lose" : "Win";
    }
    return (
        <div>
            <Button
                onClick={() => {
                    setDiceleft(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setDiceright(d6());
                }}
            >
                Roll Right
            </Button>
            <span data-testid="left-die">{diceleft}</span>
            <span data-testid="right-die">{diceright}</span> {message}
        </div>
    );
}
