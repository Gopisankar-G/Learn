import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';

function App(){
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Demo'))

);

const [newItem, setNewItem] = useState('')

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const addNewItem = {id, checked:false, item}
  const listItems = [...items, addNewItem]
  setItems(listItems) 
  localStorage.setItem("Demo",JSON.stringify(listItems))
}

const handleCheck = (id) =>
{
  //console.log(`id: ${id}`)
  const listItems=items.map((item)=> 
    item.id === id ? {...item, checked:!item.checked} : item)
  setItems(listItems) 
  localStorage.setItem("Demo",JSON.stringify(listItems)) // To stored as locally
  console.log(JSON.parse(localStorage.getItem('Demo')))
}
const handleDelete = (id) => {
  //const listItems=items.map((item)=> item.id === id ? {} : item)
  const listItems = items.filter((item) => 
      item.id !== id);
  setItems(listItems);
  localStorage.setItem("Demo",JSON.stringify(listItems)) // To stored as locally
  console.log(JSON.parse(localStorage.getItem('Demo')))
}

const handleReload = () => {
  window.location.reload();
};

const handleSubmit = (e) => {
  e.preventDefault()
  console.log('New Item Submitted')
  if(!newItem) return;
  console.log(newItem) 
  addItem(newItem)
  setNewItem('')
}

  return(
    <div className="App">
      <Header title="Demo React JS Code"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleReload={handleReload}
      />
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

export default App;