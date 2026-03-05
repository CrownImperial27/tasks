import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<string>("💘");

    const nextAlphabet: Record<string, string> = {
        "💘": "🎃",
        "🎃": "🎆",
        "🎆": "🎄",
        "🎄": "🐰",
        "🐰": "💘",
    };

    const nextYear: Record<string, string> = {
        "💘": "🐰",
        "🐰": "🎆",
        "🎆": "🎃",
        "🎃": "🎄",
        "🎄": "💘",
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button
                onClick={() => {
                    setCurrentHoliday(nextAlphabet[currentHoliday]);
                }}
            >
                Advance by Alphabet
            </Button>{" "}
            <Button
                onClick={() => {
                    setCurrentHoliday(nextYear[currentHoliday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
