import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';
import SearchItem from "./SearchItem";

function App(){
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Demo'))

);

const [newItem, setNewItem] = useState('')
const [search, setSearch] = useState('')

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
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

export default App;