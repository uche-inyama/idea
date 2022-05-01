import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CountryDetailCard from '../components/countryDetailCard';
import StyledContryDetail from '../style/countryDetail'

const CountryDetail = () => {
  const country = useSelector(state => state.country)
  const {status, data, error } = country
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
    window.location.reload(false);
  }

  if(status === 'loading' || status === 'idle'){
    return (
      <div>loading...</div>
    )
  }

  return (
    <StyledContryDetail>
      <form className="back-button" onSubmit={handleSubmit}>
        <input type="submit" value="Back"/>
      </form>
      <CountryDetailCard resource={data[0]}/>
    </StyledContryDetail>
  )
}

export default CountryDetail;