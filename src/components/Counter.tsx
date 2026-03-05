import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <div>Counter</div>
            <br></br>
            <Button
                onClick={() => {
                    setValue(1 + value);
                }}
            >
                Add One
            </Button>
            to {value}.
        </span>
    );
}
