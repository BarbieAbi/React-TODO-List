import React from 'react'

function Todo({todo,index,delTodo}) {
  return (
    
    <div className="todo-list">
      <p>{todo}</p>
      <div className="action">
        <input type="checkbox"></input>
        <button onClick={()=>delTodo(index)}>Delete</button>
      </div>
    </div>

  )
}

export default Todo