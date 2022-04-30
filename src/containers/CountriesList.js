import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countriesSlice'
import CountryCard from '../components/CountryCard'

const CountriesList = () => {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const regions = useSelector(state => state.regions)
  console.log(regions)
  const country = useSelector(state => state.country)
  console.log(country)

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

  if (countries.status === 'succeeded' && country.data.length === 0 && regions.data.length == 0){
    return (
      <ul>
        {countries.data.map(country => (
          <li key={country.name}>
            <CountryCard resource={country} />
          </li>
        ))}
      </ul>
  )}else if(country.status === 'succeeded'){
    return (
      <div>
        <CountryCard resource={country.data[0]}/>
      </div>
    )
  }else if(regions.status === 'succeeded') {
    return (
      <ul>
        {regions.data.map(region =>(
          <li key={region.name}>
            <CountryCard resource={region} />
          </li>
        ))}
      </ul>
    )
  }
}

export default CountriesList;