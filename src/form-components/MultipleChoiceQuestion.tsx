import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    expectedAnswer,
    options,
}: {
    expectedAnswer: string;
    options: string[];
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    return (
        <div>
            <Form.Group controlId="multipleChoiceQuestion">
                <Form.Select
                    value={selectedChoice}
                    onChange={(event) => {
                        setSelectedChoice(event.target.value);
                    }}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <div>{selectedChoice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
