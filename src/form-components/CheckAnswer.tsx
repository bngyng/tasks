import React, { useState } from "react";
import { Form } from "react-bootstrap";


export function CheckAnswer({expectedAnswer}: {expectedAnswer: string;}): React.JSX.Element {
    const [givenAnswer, updateGivenAnswer] = useState<string>("");

    function inputAnswer(event: React.ChangeEvent<HTMLInputElement>){
        updateGivenAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Enter Answer</Form.Label>
                <Form.Control 
                    value={givenAnswer}
                    onChange={inputAnswer} />
            </Form.Group>
            <div>
                {givenAnswer===expectedAnswer? "✔️":"❌"}
            </div>
        </div>

    );
}
