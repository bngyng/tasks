import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "💖" | "🧧" | "🥮" | "🐈‍⬛" | "🎄";

 //alphabetically
    const alphabetical_transition: Record<Holiday, Holiday> = {
        "🧧": "🎄",
        "🎄": "🐈‍⬛",
        "🐈‍⬛": "🥮",
        "🥮": "💖",
        "💖": "🧧",
    };

    //chronologically
    const chronological_transition: Record<Holiday, Holiday> = {
        "💖": "🧧",
        "🧧": "🥮",
        "🥮": "🐈‍⬛",
        "🐈‍⬛": "🎄",
        "🎄": "💖",
    };

export function CycleHoliday(): React.JSX.Element {

    const [currentHoliday, changeCurrentHoliday] = useState<Holiday>("💖");

    function changeHolidayAlphabetically(): void{
        const newHoliday = alphabetical_transition[currentHoliday];
        changeCurrentHoliday(newHoliday);
    }
    function changeHolidayChronologically():void{
        const newHoliday = chronological_transition[currentHoliday];
        changeCurrentHoliday(newHoliday);
    }

    return (
        <div>
            <div>Cycle Holiday</div>
            <br></br>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={changeHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={changeHolidayChronologically}>Advance by Year</Button>
        </div>
    );
}
