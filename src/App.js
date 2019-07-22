import React, { useState } from "react";
import List from "./components/List";
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

  const removeItem = index => {
    console.log("here...", index);
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  return (
    <div className="App">
      <form onSubmit={e => onSubmit(e)}>
        <h1>React TO-DO List</h1>
        <label>Enter a to-do:</label>
        <input value={input} onChange={e => onChange(e)} />
        <button>Submit</button>
      </form>
      <List list={list} removeItem={index => removeItem(index)} />
    </div>
  );
}

export default App;
