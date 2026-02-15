import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript with Arron Ye
                <h1>Hello this is a header</h1>
                <div
                    style={{
                        width: "50px",
                        height: "25px",
                        backgroundColor: "red",
                    }}
                ></div>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <img alt="ooh lala "></img>
            <br></br>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <ol className="ordered-list">
                <li>First thing</li>
                <li>Second thing</li>
                <li>A third item</li>
            </ol>
            <div
                style={{
                    marginLeft: "745px",
                    width: "50px",
                    height: "25px",
                    backgroundColor: "red",
                }}
            ></div>
        </div>
    );
}

export default App;
