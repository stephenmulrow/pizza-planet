import React, {useState, useEffect} from "react";


export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  const [isEditing, setIsEditing] = useState(false);
 
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }

    setTodo("");
  }

  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }
  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }
  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  return (
    <div className="pizzaName">
      <h1>Available Toppings</h1>
      <h2>
        <ul>
          <li>
            pepporoni
          </li>
          <li>
            bacon
          </li>
          <li>
            mushroom
          </li>
          <li>
            anchovies
          </li>
          <li>
            spinach
          </li>
          <li>
            peppers
          </li>
        </ul>
      </h2>
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <h2>Edit Todo</h2>
          <label htmlFor="editTodo">Edit topping: </label>
          <input
            name="editTodo"
            type="text"
            placeholder="Edit todo"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          <button type="submit" className="buttons">Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <h2>Add Toppings to your Pizza from the list of available toppings</h2>
          <label htmlFor="todo">Add topping: </label>
          <input
            name="todo"
            type="text"
            placeholder="Name of topping"
            value={todo}
            onChange={handleInputChange}
          />
          <button type="submit" className="buttons">Add</button>
        </form>
      )}

      <ul className="pizzaName">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className="buttons" onClick={() => handleEditClick(todo)}>Edit</button>
            <button className="buttons" onClick={() => handleDeleteClick(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
