import React from "react";

export default function TodoItem({ item, action }) {
  return (
    <li
      onDoubleClick={() => action(item.id)}
      className="py-4 px-2 my-2 rounded-md  bg-white"
      style={{ textDecoration: item.completed ? "line-through" : "" }}
    >
      {item.title}
    </li>
  );
}