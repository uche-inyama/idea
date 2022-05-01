import React from 'react'
import StyledCard from '../style/countryCard'

const CountryCard = ({ resource }) => {
  const { name, flag, population, region, capital } = resource
  return (
    <StyledCard>
      <div className="country-card">
        <div className="image-wrapper">
          <img src={flag} alt="country_flag" />
        </div>
        <div className="description">
          <h2>{name}</h2>
          <h5><span>Population: </span>{population}</h5>
          <h5><span>Region: </span>{region}</h5>
          <h5><span>Capital: </span>{capital}</h5>
        </div>
      </div>
    </StyledCard>  
  )
}

export default CountryCard;