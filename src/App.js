import { useState } from 'react';
import './App.css';

function App() {

  const [items, setItems] = useState([
    { id: 1, name: "Buy shopping" },
    { id: 2, name: "Clean bathroom" },
    { id: 3, name: "Car's MOT" },
  ])

  const [newItem, setNewItem] = useState("")

  const taskComplete = (itemId) => {
    // console.log("Purchase button clicked on:", itemId)
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
  }

  const listItems = items.map((item) => {
    return (
      <li key={item.id}>
      {item.name}
      <button onClick={() => taskComplete(item.id)}>Task Complete</button>
      </li>
    )
  })

  const handleItemInput = (event) => {
    setNewItem(event.target.value)
  }


  const saveNewItem = (event)=>{
    event.preventDefault();

    const newItemObj = { id: Date.now(), name: newItem}
    const nextItems = [... items, newItemObj]
    setItems(nextItems)
    setNewItem("")
  }



  return (
    <div className="App">
      <h1>To-Do List - { items.length? "Keep Working" : "No Tasks to do!!" }</h1>
      <hr></hr>
      <form onSubmit={saveNewItem}>
        <label htmlFor='new-item'>Add a new task:</label>
        <input id='new-item' type='text' value={newItem} onChange={handleItemInput}/>
        <input type='submit' value="Add New Task" />
      </form>
      <ul>
      {listItems}
      </ul>
      
    </div>
  );
}

export default App;
