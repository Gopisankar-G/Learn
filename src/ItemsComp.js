import React from 'react'
import Listul from './Listul';

const ItemsComp = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (
            <Listul
                item={item}
                key={item.id}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
        ))} 
      </ul>
  )
}

export default ItemsComp