import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRegion } from '../redux/filterFormSlice';
import { regions } from '../regions';

const FilterForm = () => {
  const [region, setRegion] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(region === 'select a region'){
      return
    }else{
      dispatch(fetchRegion(region))
    }
  }

  const handleChange = ({target: { value }}) => {
    setRegion(value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange}>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
        <input type="submit" value="filter"/>
      </form>
    </div>
  )
}

export default FilterForm;