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
    const [leftValue, setLeftValue] = useState<number>(1);
    const [rightValue, setRightValue] = useState<number>(2);

    function rollLeftDie(): void {
        setLeftValue(d6());
    }
    function rollRightDie(): void {
        setRightValue(d6());
    }

    return (
        <div>
            <div>Two Dice</div>
            <br></br>
            <span data-testid="left-die">{leftValue}</span>
            <span data-testid="right-die">{rightValue}</span>
            <div>
                <Button onClick={rollLeftDie}>Roll Left</Button>
                <Button onClick={rollRightDie}>Roll Right</Button>
            </div>
            <div>
                {leftValue === rightValue ?
                    leftValue === 1 ?
                        "You Lose!"
                    :   "You Win!"
                :   ""}
            </div>
        </div>
    );
}
