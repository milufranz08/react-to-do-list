import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const changeInput = e => {
    setInput(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault();
    setList([...list, input]);
    setInput("");
  };

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <input value={input} onChange={changeInput} />
      </form>
    </div>
  );
}

export default App;
