import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  let input = useRef();

  function add() {
    console.log("add btn working");
    let data = input.current.value;
    if (data === "") {
      alert("pls enter TODO");
      return;
    }
    else{
      setTodo([...todo, data]);
      input.current.value = "";

    }

  }

  function deleteTodo(index) {
    console.log("todo deleted", index);
    todo.splice(index, 1);
    setTodo([...todo]);
  }

  function EditTodo(index) {
    console.log("edit btn working", index);
    let newTask = prompt("enter your new TODO:");
    todo.splice(index, 1, newTask);
    setTodo([...todo]);
  }

  return (
    <div className="container">
      <h1>Hello TODO</h1>
      <input
        className="todo-input"
        type="text"
        placeholder="enter todo"
        ref={input}
      />
      <button className="add-btn" onClick={add}>
        Add
      </button>
      <ol>
        {todo.length > 0 ? (
          todo.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
                <button className="edit-btn" onClick={() => EditTodo(index)}>
                  Edit
                </button>
              </li>
            );
          })
        ) : (
          <p>Nothing in the list</p>
        )}
      </ol>
    </div>
  );
}

export default App;
