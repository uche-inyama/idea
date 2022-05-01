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
        <div className="detail-description bg-white">
          <h2 className="fs-homepage-items ff-nunito-sans fw-800">{name}</h2>
          <h5 className="ff-nunito-sans"><span className="fs-homepage-items text-lm-light-gray ff-nunito-sans fw-600">Native Name: </span>{nativeName}</h5>
          <h5 className="ff-nunito-sans"><span className="fs-homepage-items text-lm-light-gray ff-nunito-sans fw-600">Population: </span>{population}</h5>
          <h5 className="ff-nunito-sans"><span className="fs-homepage-items text-lm-light-gray ff-nunito-sans fw-600">Region: </span>{region}</h5>
          <h5 className="ff-nunito-sans"><span className="fs-homepage-items text-lm-light-gray ff-nunito-sans fw-600">Sub region: </span>{subregion}</h5>
          <h5 className="ff-nunito-sans"><span className="fs-homepage-items text-lm-light-gray ff-nunito-sans fw-600">Top Level Domain: </span>{topLevelDomain}</h5>
          <h5 className="ff-nunito-sans"><span className="fs-homepage-items text-lm-light-gray ff-nunito-sans fw-600">languages: <span className=""> {
            languages.map(language => <span class="languages text-center">
             {language.name}
            </span>
            )}</span></span></h5>
          <h5 className="ff-nunito-sans"><span className="fs-homepage-items text-lm-light-gray ff-nunito-sans fw-600">Border Countries: <div className="text-center d-grid">{
            borders.map(country => <div class="border-country"> {country}</div>)} </div></span></h5>
        </div>
      </div>
    </StyledCard>  
  )
}
export default CountryDetailCard;