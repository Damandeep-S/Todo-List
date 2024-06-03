import "./App.css";
import Navbar from "./components/Navbar";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLS();
  };
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheck = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    console.log(index);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);

    saveToLS();
  };

  return (
    <>
      <Navbar />
      <h1>Add a Todo</h1>
      <div className="todo-input-container">
        <input
          type="text"
          onChange={handleChange}
          value={todo}
          placeholder="Enter your todo"
        />
        <button onClick={handleAdd} disabled={todo.length <= 3}>
          Save
        </button>
      </div>
      <div className="todo-list-container">
        <div>
          <input type="checkbox" onChange={toggleFinished} checked={showFinished} /> Show Finished
        </div>
        <h2>Your Todos</h2>
        {todos.length === 0 && <div className="no-tasks">No Tasks to display</div>}
        {todos.map((item) => (
          (showFinished || !item.isCompleted) && (
            <div className="lists" key={item.id}>
              <input
                name={item.id}
                type="checkbox"
                checked={item.isCompleted}
                onChange={handleCheck}
              />
              <div className={item.isCompleted ? "linecut" : ""}>
                {item.todo}
              </div>
              <button
                className="edit-btn"
                onClick={(e) => handleEdit(e, item.id)}
              >
                <BiSolidEdit /> Edit
              </button>
              <button
                className="delete-btn"
                onClick={(e) => {
                  handleDelete(e, item.id);
                }}
              >
                <MdDelete /> Delete
              </button>
            </div>
          )
        ))}
      </div>
    </>
  );
}

export default App;
