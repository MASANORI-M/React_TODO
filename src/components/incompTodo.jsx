import React from "react";

export const IncompTodo = (props) => {
  const { intodo, onClickcomptodo, onClickDeletetodo } = props;

  return (
    <div className="imcomp">
      <p className="title">未完了のTODO</p>
      <ul>
        {intodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickcomptodo(index)}>完了</button>
              <button onClick={() => onClickDeletetodo(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
