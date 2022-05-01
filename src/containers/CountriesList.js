import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countriesSlice'
import CountryCard from '../components/CountryCard'
import StyledCountryList from '../style/countrylist'

const CountriesList = () => {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const regions = useSelector(state => state.regions)
  const country = useSelector(state => state.country)

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
      <StyledCountryList country={country}>
        <ul>
          {countries.data.map(country => (
            <li key={country.name}>
              <CountryCard resource={country} />
            </li>
          ))}
        </ul>
      </StyledCountryList>
     
  )}else if(regions.status === 'succeeded') {
    return (
      <StyledCountryList>
        <ul>
          {regions.data.map(region =>(
            <li key={region.name}>
              <CountryCard resource={region} />
            </li>
          ))}
      </ul>
      </StyledCountryList>
    )
  }
}

export default CountriesList;