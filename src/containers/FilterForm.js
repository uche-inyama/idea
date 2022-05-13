import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchRegion } from '../redux/filterFormSlice';
import { regions } from '../regions';
import StyledFilterForm from '../style/filterForm';

const FilterForm = () => {
  const dispatch = useDispatch()

  const handleChange = ({target: { value }}) => {
    dispatch(fetchRegion(value))
  }

  return (
    <StyledFilterForm>
      <div>
          <form>
            <select className="input" data-testid="select" onChange={handleChange}>
              {regions.map(region => (
                <option className="input" key={region} data-testid="select-option" value={region} placeholder="select a region">{region}</option>
              ))}
            </select>
        </form>
      </div>
    </StyledFilterForm>
  )
}

export default FilterForm;