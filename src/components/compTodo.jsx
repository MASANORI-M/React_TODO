import React from "react";

export const CompTodo = (props) => {
  const { cotodo, onClickBacktodo } = props;

  return (
    <div className="comp">
      <p className="title">完了のTODO</p>
      <ul>
        {cotodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBacktodo(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
