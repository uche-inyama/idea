import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CountryCard from '../components/CountryCard';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Back"/>
      </form>
      <CountryCard resource={data[0]}/>
    </div>
  )
}

export default CountryDetail;