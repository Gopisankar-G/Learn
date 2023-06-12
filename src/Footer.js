import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
    const name = "Gopi"

  return (
    <footer >
        Copyright &copy; by {name} {year.getFullYear()} -- {length} {length <= 1 ? "item" : "items"} Available.
    </footer>
    
  )
}

export default Footer