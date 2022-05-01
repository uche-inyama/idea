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
        <StyledCountryList>
          {countries.data.map(country => (
            <li key={country.name}>
              <CountryCard resource={country} />
            </li>
          ))}
        </StyledCountryList>
     
  )}else if(regions.status === 'succeeded') {
    return (
        <StyledCountryList>
          {regions.data.map(region =>(
            <li key={region.name}>
              <CountryCard resource={region} />
            </li>
          ))}
      </StyledCountryList>
    )
  }
}

export default CountriesList;