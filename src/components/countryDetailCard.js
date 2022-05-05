import React from 'react'
import StyledCard from '../style/countryCard';

const CountryDetailCard = ({ resource, handleSubmit }) => {
  const { borders, languages, nativeName, currencies, subregion, topLevelDomain, name, flag, population, region, capital } = resource
  const currency = currencies[0]['name']

  const border = borders ? borders : []

  return (
    <div className="country-detail-wrapper">
      <i className="fa-solid fa-arrow-left-long"  onClick={handleSubmit}><span>Back</span></i>
      <div className="country-detail-card">
        <div className="detail-image-wrapper">
          <img src={flag} alt="country_flag" />
        </div>
        <div className="detail-description">
          <div className="d-grid">
            <div>
              <h2 className="country-name">{name}</h2>
              <h5><span>Native Name: </span>{nativeName}</h5>
              <h5><span>Population: </span>{population}</h5>
              <h5><span>Region: </span>{region}</h5>
              <h5><span>Sub region: </span>{subregion}</h5>
              <h5><span>Capital: </span>{capital}</h5>
            </div>
            <div className="level-2">
              <h5><span>Top Level Domain: </span>{topLevelDomain}</h5>
              <h5><span>Currency: </span>{currency}</h5>
              <h5><span>languages: </span> {
                languages.map(language => <span className="language-list" key={language}>
                {language.name}
                </span>
                )}</h5>
            </div>
          </div>
          <h5 className="border-country"><span>Border Countries: </span> <div className="d-flex">{
            border.map(country => <div key={country} className="item"> {country}</div>)} </div></h5>
        </div>
      </div>
    </div>  
  )
}
export default CountryDetailCard;