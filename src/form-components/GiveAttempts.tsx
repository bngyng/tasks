// import { request } from "http";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>){
        setRequestedAttempts(event.target.value)
    }

    function gainAttempts(){
        const parsed = parseInt(requestedAttempts);
        if(!isNaN(parsed)){
            setAttemptsLeft(attemptsLeft+parsed);
        }
    }

    function useAttempt(){
        setAttemptsLeft(attemptsLeft-1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Number of attempts left: {attemptsLeft}</div>
            <div>
                <Form.Group controlId="formRequestedAttempts">
                    <Form.Label>How many attempts do you want?</Form.Label>
                    <Form.Control
                        type="number"
                        value={requestedAttempts}
                        onChange={updateAttempts}
                    />
                </Form.Group>
            </div>
            <Button
                onClick={
                   useAttempt
                } disabled = {attemptsLeft===0}
            >
                Use
            </Button>
            <Button
                onClick={gainAttempts}
            >
                Gain
            </Button>
        </div>
    );
}
