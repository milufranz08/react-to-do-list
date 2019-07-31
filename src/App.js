import React, { useState, useEffect } from "react";
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
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <h1>React TO-DO List</h1>
        <label>Enter a to-do:</label>
        <input value={input} onChange={onChange} />
        <button>Submit</button>
      </form>
      <List list={list} removeItem={removeItem} />
    </div>
  );
}

export default App;
