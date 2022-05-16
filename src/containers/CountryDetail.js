import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CountryDetailCard from '../components/countryDetailCard';
import StyledContryDetail from '../style/countryDetail'
import { fetchCountry } from '../redux/searchFormSlice';


const CountryDetail = () => {
  const country = useSelector(state => (state.country))
  const errors = useSelector(state => (state.country.data))

  const {status, data } = country
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const { slug } = useParams()

  useEffect(() => {
    dispatch(fetchCountry(slug));
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

  if(typeof(errors) === 'string') {
    return (
      <div className="errors">
        <h4 className="d-flex">{errors.slice(0, 15)}</h4>
        <p className="d-flex">
          If the title of the error is request failed, you might have <br />
          typed the name of country incorrectly. Kindly copy and<br/>
          paste, the name of the country from the country card <br /> 
          into the search field.
        </p>
        <div style={{textAlign: "center", marginTop:"20px", cursor:"pointer" }} onClick={handleSubmit}>Back to Home</div>
      </div>
    )
  }

  return (
    <StyledContryDetail>
        <CountryDetailCard handleSubmit={handleSubmit} error resource={data[0]}/>
    </StyledContryDetail>
  )
}

export default CountryDetail;