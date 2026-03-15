import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAtempts] = useState<number>(3);
    const [requestAttempts, setRequestAttempts] = useState<number>(0);
    return (
        <div>
            <Form.Group controlId="attemptRequest">
                <Form.Label>Forms</Form.Label>
                <div>Attempts Remaining: {attempts}</div>
                <Form.Control
                    type="number"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequestAttempts(Number(event.target.value));
                    }}
                ></Form.Control>
            </Form.Group>
            <button
                onClick={() => {
                    setAtempts(attempts + requestAttempts);
                }}
            >
                Gain
            </button>
            <button
                onClick={() => {
                    setAtempts(attempts - 1);
                }}
                disabled={attempts === 0}
            >
                Use
            </button>
        </div>
    );
}
