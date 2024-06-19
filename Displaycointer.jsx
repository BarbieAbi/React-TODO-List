import React from "react";
import Todo from "./Todo";

function Displaycointer({todo,delTodo}) {
     return (
        <div className="Display-Container">
         {todo.map((todo , index)=>
         (<Todo todo={todo} index={index} delTodo={delTodo} />
  ))}
  </div>
  );
        
}
export default Displaycointer;
