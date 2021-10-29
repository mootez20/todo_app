import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TODOS = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

export default function Body() {
  const [todoList, settodoList] = useState(TODOS);
  const [todoTitle, settodoTitle] = useState("");
  const addTodo = () => {
    const newItem = {
      userId: 1,
      id: todoList.length + 1,
      title: todoTitle,
      completed: false,
    };
    settodoList([...todoList, newItem]);
    settodoTitle("");
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    settodoList(newTodoList);
  };

  return (
    <div
      className="bg-gray-900 w-screen h-screen flex 
    justify-center items-center"
    >
      <div className="flex flex-col w-9/12 m-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTodo();
          }}
          className="flex justify-between items-center gap-2"
        >
          <input
            type="text"
            className=" w-9/12 block
                  outline-none rounded-md py-2 px-4"
            placeholder="What you will do..."
            value={todoTitle}
            onChange={(e) => {
              settodoTitle(e.target.value);
            }}
          />
          <button className="rounded-md bg-green-400 py-2 px-14 text-white w-1/5	">
            Add Todo
          </button>
        </form>
        <ul className="">
          {todoList.map((todo) => (
            <TodoItem action={removeTodo} key={todo.id} item={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}