import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CountryDetailCard from '../components/countryDetailCard';
import StyledContryDetail from '../style/countryDetail'
import { fetchCountry } from '../redux/searchFormSlice';


const CountryDetail = () => {
  const country = useSelector(state => state.country)
  const {status, data, error } = country
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const { slug } = useParams()

  useEffect(() => {
    // const container = document.querySelector('.container')
    // container.style.backgroundColor = '#fff';
    if (!country.data.length) dispatch(fetchCountry(slug));
  }, [dispatch, slug])

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
        <CountryDetailCard handleSubmit={handleSubmit} resource={data[0]}/>
    </StyledContryDetail>
  )
}

export default CountryDetail;