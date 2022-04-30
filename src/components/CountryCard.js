import React from 'react'


const CountryCard = ({ resource }) => {
  console.log(resource)
  const { name, flag, population, region, capital } = resource
  console.log(resource)
  return (
    <div className="country-card">
      <div className="image-wrapper">
        <img src={flag} alt="country_flag" />
      </div>
      <div className="description">
        <h2>{name}</h2>
        <h5><span>Population of country: </span>{population}</h5>
        <h5><span>Region of Country: </span>{region}</h5>
        <h5><span>Capital of Country: </span>{capital}</h5>
      </div>
    </div>
  )
}

export default CountryCard;