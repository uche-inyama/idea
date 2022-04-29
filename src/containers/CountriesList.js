import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countriesSlice'
import CountryCard from '../components/CountryCard'

const CountriesList = () => {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

  console.log(countries)
  const { status, error, data } = countries
  
  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch, fetchCountries])

  if(status === 'loading' || status === 'idle'){
    return (
      <div>loading...</div>
    )
  }

  return (
    <ul>
      {data.map(country => (
        <li key={country.name}>
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  )
}

export default CountriesList;