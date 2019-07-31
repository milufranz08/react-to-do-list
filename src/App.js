import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const changeInput = e => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <input value={input} onChange={changeInput} />
    </div>
  );
}

export default App;
