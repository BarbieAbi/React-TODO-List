import { useState } from "react";
import "./App.css";
import Displaycointer from "./component/Displaycointer";
import Maincontainer from "./component/Maincontainer";

function App() {
  const [inputVal, setInputval] = useState("");
  const [todo, setTodo] = useState([]);

  function writeTodo(e) {
    setInputval(e.target.value);
  }

  function addTodo() {
    if (inputVal != "") {
      setTodo((prevTodo) => [...prevTodo, inputVal]);
      setInputval("");
    }
  }
  function delTodo(todoIndex)
  {setTodo((prevTodo)=>prevTodo.filter((prevTodo,preTodoIndex)=>{
    return preTodoIndex!=todoIndex
  }))}

  return (
    <main>
      <h1>ToDo List</h1>
      <Maincontainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <Displaycointer todo={todo} delTodo={delTodo}/>
    </main>
  );
}

export default App;
