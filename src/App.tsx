import React from "react";
import "./App.css";
import rourou from "./images/rourou.jpeg";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Bing Yang
            </header>
            <br></br>
            <h1>For Task 3:</h1>
            <img
                src={rourou}
                alt="A picture of my cute cat Rourou"
                style={{ width: "200px" }}
            />
            <div>
                A List of cute animals:
                <ul>
                    <li>Cats</li>
                    <li>Dogs</li>
                    <li>Cheetahs</li>
                    <li>Red Pandas</li>
                </ul>
            </div>

            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <div
                style={{
                    width: "100px",
                    height: "300px",
                    backgroundColor: "red",
                }}
            ></div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
