import React from "react";
import "./list.css";

function List(props) {
  const { list } = props;

  return (
    <ul className="list_wrapper">
      {list.map((data, index) => (
        <li className="list_item" key={index}>
          {data}
        </li>
      ))}
    </ul>
  );
}

export default List;
