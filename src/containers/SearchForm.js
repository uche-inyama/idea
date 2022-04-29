import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCountry } from '../redux/searchFormSlice';

const SearchForm = () => {
  const [country, setCountry] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchCountry(country))
  }

  const handleChange = ({target: { value }}) => {
    setCountry(value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={country} onChange={handleChange} />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default SearchForm;