import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRegion } from '../redux/filterFormSlice';
import { fetchCountries } from '../redux/countriesSlice'
import { regions } from '../regions';
import StyledFilterForm from '../style/filterForm';

const FilterForm = () => {
  const dispatch = useDispatch()

  const handleChange = ({target: { value }}) => {
    console.log(value)
    dispatch(fetchRegion(value))
  }

  return (
    <StyledFilterForm>
      <div>
          <form>
            <select onChange={handleChange}>
              {regions.map(region => (
                <option key={region} value={region} placeholder="select a region">{region}</option>
              ))}
            </select>
        </form>
      </div>
    </StyledFilterForm>
  )
}

export default FilterForm;