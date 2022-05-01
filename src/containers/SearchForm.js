import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { fetchCountry } from '../redux/searchFormSlice';
import StyledSearchForm from '../style/searchForm'; 

const SearchForm = () => {
  const [country, setCountry] = useState('')
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchCountry(country))
    navigate(`/${country}/details`)
  }

  const handleChange = ({target: { value }}) => {
    setCountry(value)
  }

  return (
    <StyledSearchForm>
      <div>
        <form onSubmit={handleSubmit}>
          <input class="text" type="text" value={country} onChange={handleChange} />
          <input type="submit" value="search"/>
        </form>
      </div>
    </StyledSearchForm>
  )
}

export default SearchForm;