import React from 'react'

const Square = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section
        className="square"
        style={{
            backgroundColor: colorValue,
            color: isDarkText ? "#000" : "#FF0000"
        }}
    >
    <p>{colorValue ? colorValue : "Empty Value"}</p> 
    <p>{hexValue ? hexValue : null}</p>   
    </section>    
  )
}

Square.defaultProps = {
    colorValue : "Empty Color "
}

export default Square