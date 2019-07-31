import React from "react";
import "./list.css";

function List(props) {
  const { list, deleteTodo } = props;

  return (
    <ul className="list_wrapper">
      {list.map((item, index) => {
        return (
          <li
            className="list_item"
            key={index}
            onClick={() => deleteTodo(index)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
