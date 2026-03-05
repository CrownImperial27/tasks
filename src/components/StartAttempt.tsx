import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inprogress, setInprogress] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={inprogress}
            >
                Mulligan
            </Button>
            <Button
                onClick={() => {
                    setInprogress(true);
                    setAttempts(attempts - 1);
                }}
                disabled={inprogress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setInprogress(false);
                }}
                disabled={!inprogress}
            >
                Stop Quiz
            </Button>
            Attempts Remaining: {attempts}
        </div>
    );
}
