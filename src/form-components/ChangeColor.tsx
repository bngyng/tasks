import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "gray"];
    const [chosenColor, setChosenColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {COLORS.map((color:string)=>(
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        label={color}
                        name="color-group"
                        value={color}
                        checked={chosenColor === color}
                        onChange={()=>{setChosenColor(color)}}
                        />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    padding: "10px",
                    marginTop: "10px",
                    display: "inline-block"
                }}
            >{chosenColor}</div>
        </div>
    );
}
