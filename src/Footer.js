import React from 'react'

const Footer = () => {
    const year = new Date();
    const name = "Gopi"

  return (
    <footer>
        Copyright &copy; by {name} {year.getFullYear()}
    </footer>
  )
}

export default Footer