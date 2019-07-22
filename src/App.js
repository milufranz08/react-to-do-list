import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const onChange = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setList([...list, input]);
    setInput("");
  };

  console.log({ list });

  return (
    <form className="App" onSubmit={e => onSubmit(e)}>
      <h2>React TO-DO List</h2>
      <label>Enter a to-do:</label>
      <input value={input} onChange={e => onChange(e)} />
      <button>Submit</button>
    </form>
  );
}

export default App;
