import React, { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [clicks, setClicks] = useState(0);

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setClicks(clicks => clicks + 1);
  }, []);
  const onReset = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setClicks(0);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={onClick}>Click me!</button>{" "}
        <button type="reset" onClick={onReset}>
          Reset me!
        </button>
        <p>You've clicked me {clicks} times</p>
      </header>
    </div>
  );
};

export default App;
