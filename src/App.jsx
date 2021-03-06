import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompTodo } from "./components/incompTodo";
import { CompTodo } from "./components/compTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompTodo, setIncompTodo] = useState([]);

  const [compTodo, setcompTodo] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompTodo, todoText];
    setIncompTodo(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodo = [...incompTodo];
    newTodo.splice(index, 1);
    setIncompTodo(newTodo);
  };

  const onClickComp = (index) => {
    const newIncompTodo = [...incompTodo];
    newIncompTodo.splice(index, 1);

    const newCompTodo = [...compTodo, incompTodo[index]];
    setIncompTodo(newIncompTodo);
    setcompTodo(newCompTodo);
  };

  const onClickBack = (index) => {
    const newCompTodo = [...compTodo];
    newCompTodo.splice(index, 1);

    const newIncompTodo = [...incompTodo, compTodo[index]];
    setcompTodo(newCompTodo);
    setIncompTodo(newIncompTodo);
  };

  return (
    <>
      <InputTodo
        todoTsxt={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompTodo.length >= 5}
      />

      {incompTodo.length >= 5 && (
        <p className="alarm">登録できるTODOは5件まで！</p>
      )}
      <IncompTodo
        intodo={incompTodo}
        onClickcomptodo={onClickComp}
        onClickDeletetodo={onClickDelete}
      />
      <CompTodo cotodo={compTodo} onClickBacktodo={onClickBack} />
    </>
  );
};
