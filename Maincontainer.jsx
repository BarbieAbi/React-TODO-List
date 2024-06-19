import React from "react";

function Maincontainer({ inputVal, writeTodo, addTodo }) {
  return (
    <div className="Main-Container">
      <input type="text" value={inputVal} onChange={writeTodo}></input>
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default Maincontainer;
