import React from 'react'
import StyledCard from '../style/countryCard';

const CountryDetailCard = ({ resource }) => {
  const {borders, languages, nativeName, currencies, subregion, topLevelDomain, name, flag, population, region, capital } = resource
  console.log(languages)

  return (
    <StyledCard>
      <div className="country-card">
        <div className="image-wrapper">
          <img src={flag} alt="country_flag" />
        </div>
        <div className="detail-description">
          <h2 className="">{name}</h2>
          <h5 className=""><span className="">Native Name: </span>{nativeName}</h5>
          <h5 className=""><span className="">Population: </span>{population}</h5>
          <h5 className=""><span className="">Region: </span>{region}</h5>
          <h5 className=""><span className="">Sub region: </span>{subregion}</h5>
          <h5 className=""><span className="">Top Level Domain: </span>{topLevelDomain}</h5>
          <h5 className=""><span className="">languages: <span className=""> {
            languages.map(language => <span class="">
             {language.name}
            </span>
            )}</span></span></h5>
          <h5 className=""><span className="">Border Countries: <div className="">{
            borders.map(country => <div class=""> {country}</div>)} </div></span></h5>
        </div>
      </div>
    </StyledCard>  
  )
}
export default CountryDetailCard;