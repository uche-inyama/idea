import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { fetchCountry } from '../redux/searchFormSlice';
import StyledSearchForm from '../style/searchForm'; 

const SearchForm = () => {
  const [country, setCountry] = useState('')
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = document.querySelector('#search')
    dispatch(fetchCountry(country))
    navigate(`/${country}/details`)
    input.value = ''
  }

  const handleChange = ({target: { value }}) => {
    setCountry(value)
  }

  return (
    <StyledSearchForm>
        <form onSubmit={handleSubmit}>
          <div>
            <input id="search" className="input text" 
              type="text" value={country} aria-label="search-input" placeholder="search by country" onChange={handleChange} />
          </div>
        </form>
    </StyledSearchForm>
  )
}

export default SearchForm;