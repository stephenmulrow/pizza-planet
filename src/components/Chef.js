import React from "react";


export default function Chef() {
  const initialList = [
    {
      id: "a",
      name: "Buzz Lightyear",
      description: "cheese with pepporoni"
    },
    {
      id: "b",
      name: "Woody",
      description: "bacon, sausage, and chicken"
    },
    {
      id: "c",
      name: "Andy's Room",
      description: "peppers, onions, and spiach"
    },
    {
      id: "c",
      name: "Wild Bill",
      description: "bbq pork, chicken, and hot sauce"
    },
    {
      id: "c",
      name: "Rex",
      description: "peppers, chicken, and salami"
    }
  ];

  const [list, setList] = React.useState(initialList)
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  function handleChange(event) {
    setName(event.target.value)
    // input field state
  }

  function handleToppings(event){
    setDescription(event.target.value)
  }

  function handleRemove(id){
    const newList = list.filter((name) => {
      return name.id !== id});

    setList(newList)
  }
  function handleDeleteClick(id) {
    const removeItem = list.filter((name) => {
      return name.id !== id;
    });
    setList(removeItem);
  }

  function deleteToppings(id) {
    const removeTopping = list.filter((description) => {
      return description.id != id;
    });
    setList(removeTopping);
  }

  function handleAdd(){
    const newList = list.concat({name})

    setList(newList)
    // add item to list
  }

  function addTopping(){
    const newList = list.concat({description})

    setList(newList)
  }
  return (
    <div id="main">
      <h1>Welcome Chef!</h1>
      <h2>First, take a look at our list of available Pizzas, and their respective toppings</h2>
  
      <ul>
        {list.map((item) =>(
          <li key={item.id}>{item.name}
          <button className="buttons" onClick={()=> handleDeleteClick(name.id)}>delete</button>
          <br></br>
          {item.description}
          <button className="buttons" onClick={()=> deleteToppings(description.id)}>delete</button>
          </li>
          
        ))}
        
      </ul>
      <h3>If you would like to create a new pizza, enter in the name of the pizza, and the toppings that will go on the pizza </h3>
      <input type="text" placeholder="name of pizza" value={name} onChange={handleChange}/>

      <button className="buttons" type="button" onClick={handleAdd}>
        Add Pizza
      </button>
      <input type="text" placeholder="toppings on pizza" value={description} onChange={handleToppings}/>
      <button className="buttons" type="button" onClick={addTopping}>
        Add Toppings
      </button>
     
    </div>
  )
}
