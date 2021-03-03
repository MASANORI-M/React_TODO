import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompTodo, setIncompTodo] = useState(["ああああ", "いいいい"]);

  const [compTodo, setcompTodo] = useState(["うううう"]);

  return (
    <>
      <div className="input">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="imcomp">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompTodo.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="comp">
        <p className="title">完了のTODO</p>
        <ul>
          {compTodo.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
