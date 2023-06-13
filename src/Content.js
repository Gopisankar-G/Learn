import React from 'react'
import ItemsComp from './ItemsComp';

const Content = ({items, handleCheck, handleDelete, /*handleReload*/}) => {
    

  return (
    <main>
      {(items.length) ? ( 
        <ItemsComp
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      ) : (
        <><p className='msg'>React App list is Empty!.. Refresh the page.</p> </>  
        /*<button className='btn'onClick={handleReload}>
            Refresh
      </button>*/
      )
    }
    </main>
    
  )
}

export default Content