import React from 'react'

const Content = () => {
    function handleNameChange(){
        const names=["Earn","Grow","Give"];
        const int=Math.floor(Math.random()*3);
        return names[int];
    }

    const handleClick = (e) => {
        console.log(e.target.innerText)
    }

    const handleClick2 = (name) => {
        console.log(`Thanks for the Submittion ${name}`)
    }

  return (
    <main>
    <p onDoubleClick={() => handleClick2('Gopi')}>
        Lets {handleNameChange()} Money More
    </p>
    <button onClick={(e) => handleClick(e)}>Submit</button>
    </main>
    
  )
}

export default Content