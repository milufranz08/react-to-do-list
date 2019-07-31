import React from "react";
import "./List.css";

function List(props) {
  const { list, deleteTodo } = props;

  return (
    <ul className="list_wrapper">
      {list.map((data, index) => (
        <li className="list_item" key={index} onClick={() => deleteTodo(index)}>
          {data}
        </li>
      ))}
    </ul>
  );
}

export default List;
