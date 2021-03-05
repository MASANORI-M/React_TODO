import React, { useState } from "react";
import "./styles.css";

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
      <div className="input">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="imcomp">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompTodo.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComp(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="comp">
        <p className="title">完了のTODO</p>
        <ul>
          {compTodo.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
