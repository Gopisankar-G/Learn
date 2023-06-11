import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "JavaScript"
        },
        {
            id: 2,
            checked: false,
            item: "React Js"
        },
        {
            id: 3,
            checked: false,
            item: "BIGFIX"
        }
    ]);

    const handleCheck = (id) =>
    {
      //console.log(`id: ${id}`)
      const listItems=items.map((item)=> 
        item.id === id ? {...item, checked:!item.checked} : item)
      setItems(listItems) 
      localStorage.setItem("Demo",JSON.stringify(listItems)) // To stored as locally
      console.log(localStorage.getItem("Demo"));
    }
    const handleDelete = (id) => {
      //const listItems=items.map((item)=> item.id === id ? {} : item)
      const listItems = items.filter((item) => 
          item.id !== id);
      setItems(listItems);
      localStorage.setItem("Demo",JSON.stringify(listItems)) // To stored as locally
      console.log(localStorage.getItem("Demo"));
    }

    const handleReload = () => {
      window.location.reload();
    };

  return (
    <main>
      {(items.length) ? (
      <ul>
        {items.map((item) => (
            <li className="item" key={item.id}>
            <label 
                style={(item.checked) ? {color:'black',textDecoration : 'line-through'} : null}
                onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
                <input
                  type = "checkbox"
                  onChange={()=>handleCheck(item.id)}
                  checked = {item.checked}
                />
            <FaTrashAlt
                onClick={()=>handleDelete(item.id)}
                role="button"
                tabIndex="0"
            />
          </li>
        ))} 
      </ul>
      ) : (
        <><p className='msg'>React App list is Empty!.. Refresh the page.</p>
        <button className='btn'onClick={handleReload}>
            Refresh
          </button></>
      )
     }  
    </main>
    
  )
}

export default Content