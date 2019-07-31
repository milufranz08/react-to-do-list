import React, { useState } from "react";
import List from "./components/List";
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

  const deleteTodo = index => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <h1>React TO-DO List</h1>
        <label>Enter a to-do:</label>
        <input value={input} onChange={changeInput} />
        <button>Submit</button>
      </form>
      <List list={list} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
