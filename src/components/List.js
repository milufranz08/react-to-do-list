import React from "react";
import "./list.css";

function List(props) {
  const { list, removeItem } = props;

  return (
    <ul className="list_wrapper">
      {list.map((item, index) => {
        return (
          <li
            className="list_item"
            key={index}
            onClick={() => removeItem(index)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
