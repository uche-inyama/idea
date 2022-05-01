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
        <div className="description bg-white">
          <h2 className="fs-homepage-items --ff-nunito-sans fw-800">{name}</h2>
          <h5 className="--ff-nunito-sans"><span className="fs-homepage-items text-lm-light-gray --ff-nunito-sans fw-600">Population: </span>{population}</h5>
          <h5 className="--ff-nunito-sans"><span className="fs-homepage-items text-lm-light-gray --ff-nunito-sans fw-600">Region: </span>{region}</h5>
          <h5 className="--ff-nunito-sans"><span className="fs-homepage-items text-lm-light-gray --ff-nunito-sans fw-600">Capital: </span>{capital}</h5>
        </div>
      </div>
    </StyledCard>  
  )
}

export default CountryCard;