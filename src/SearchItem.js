import React from 'react'

const SearchItem = () => {
  return (
    <form className='searchForm' onSubmit = {(e)=>e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
            id = 'search'
            text = "text"
            role = 'searchbox'
            placeholder = 'Search Items'
        />
    </form>
  )
}

export default SearchItem