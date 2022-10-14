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
    <div className="App">
      <h1>Current Pizzas on our Menu</h1>
      <h2>
        <ul className="pizzaName">
          <li>
            Buzz Lightyear (cheese with pepporoni)
          </li>
          <br></br>
          <li>
          Woody (bacon, sausage, and chicken)
          </li>
          <br></br>
          <li>
          Andy's Room (peppers, onions, and spiach)          </li>
          <br></br>
          <li>
          Wild Bill (bbq pork, chicken, and hot sauce)
          </li>
          <br></br>
          <li>
          Rex (peppers, chicken, and salami)
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
          <h2>Create a new pizza! Enter the name of the pizza below, with toppings in parenthesis</h2>
          <label htmlFor="todo">Pizza Name: </label>
          <input
            name="todo"
            type="text"
            placeholder="Name of pizza"
            value={todo}
            onChange={handleInputChange}
          />
          <button type="submit" className="buttons">Add</button>
        </form>
      ) }

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
















// import React from "react";


// export default function Chef() {
//   const initialList = [
//     {
//       id: "a",
//       name: "Buzz Lightyear",
//       description: "cheese with pepporoni"
//     },
//     {
//       id: "b",
//       name: "Woody",
//       description: "bacon, sausage, and chicken"
//     },
//     {
//       id: "c",
//       name: "Andy's Room",
//       description: "peppers, onions, and spiach"
//     },
//     {
//       id: "c",
//       name: "Wild Bill",
//       description: "bbq pork, chicken, and hot sauce"
//     },
//     {
//       id: "c",
//       name: "Rex",
//       description: "peppers, chicken, and salami"
//     }
//   ];

//   const [list, setList] = React.useState(initialList)
//   const [name, setName] = React.useState('')
//   const [description, setDescription] = React.useState('')

//   function handleChange(event) {
//     setName(event.target.value)
//     // input field state
//   }

//   function handleToppings(event){
//     setDescription(event.target.value)
//   }

//   function handleRemove(id){
//     const newList = list.filter((name) => {
//       return name.id !== id});

//     setList(newList)
//   }
//   function handleDeleteClick(id) {
//     const removeItem = list.filter((name) => {
//       return name.id !== id;
//     });
//     setList(removeItem);
//   }

//   function deleteToppings(id) {
//     const removeTopping = list.filter((description) => {
//       return description.id != id;
//     });
//     setList(removeTopping);
//   }

//   function handleAdd(){
//     const newList = list.concat({name})

//     setList(newList)
//     // add item to list
//   }

//   function addTopping(){
//     const newList = list.concat({description})

//     setList(newList)
//   }
//   return (
//     <div id="main">
//       <h1>Welcome Chef!</h1>
//       <h2>First, take a look at our list of available Pizzas, and their respective toppings</h2>
  
//       <ul>
//         {list.map((item) =>(
//           <li key={item.id}>{item.name}
//           <button className="buttons" onClick={()=> handleDeleteClick(name.id)}>delete</button>
//           <br></br>
//           {item.description}
//           <button className="buttons" onClick={()=> deleteToppings(description.id)}>delete</button>
//           </li>
          
//         ))}
        
//       </ul>
//       <h3>If you would like to create a new pizza, enter in the name of the pizza, and the toppings that will go on the pizza </h3>
//       <input type="text" placeholder="name of pizza" value={name} onChange={handleChange}/>

//       <button className="buttons" type="button" onClick={handleAdd}>
//         Add Pizza
//       </button>
//       <input type="text" placeholder="toppings on pizza" value={description} onChange={handleToppings}/>
//       <button className="buttons" type="button" onClick={addTopping}>
//         Add Toppings
//       </button>
     
//     </div>
//   )
// }
