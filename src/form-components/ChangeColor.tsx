import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "cyan",
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <Form.Group controlId="colorRadios">
                {colors.map((color) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        label={color}
                        name="colorGroup"
                        value={color}
                        checked={selectedColor === color}
                        onChange={() => {
                            setSelectedColor(color);
                        }}
                    />
                ))}
            </Form.Group>

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "20px",
                    marginTop: "10px",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
