import React from 'react'
import StyledCard from '../style/countryCard';

const CountryDetailCard = ({ resource }) => {
  const {borders, languages, nativeName, currencies, subregion, topLevelDomain, name, flag, population, region, capital } = resource

  const currency = currencies[0]['name']

  return (
    <StyledCard>
      <div className="country-card">
        <div className="image-wrapper">
          <img src={flag} alt="country_flag" />
        </div>
        <div className="detail-description">
          <h2>{name}</h2>
          <h5><span>Native Name: </span>{nativeName}</h5>
          <h5><span>Population: </span>{population}</h5>
          <h5><span>Region: </span>{region}</h5>
          <h5><span>Sub region: </span>{subregion}</h5>
          <div className="level-2">
            <h5><span>Top Level Domain: </span>{topLevelDomain}</h5>
            <h5><span>Top Level Domain: </span>{currency}</h5>
            <h5><span>languages: <span> {
              languages.map(language => <span key={language}>
              {language.name}
              </span>
              )}</span></span></h5>
          </div>
          <h5 className="border-country"><span>Border Countries: <div className="d-flex">{
            borders.map(country => <div key={country} className="item"> {country}</div>)} </div></span></h5>
        </div>
      </div>
    </StyledCard>  
  )
}
export default CountryDetailCard;