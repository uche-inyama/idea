import React from 'react'

const CountryDetailCard = ({ resource }) => {
  const {borders, languages, currencies, subregion, topLevelDomain, name, flag, population, region, capital } = resource

  const country_languages = () => {
    const language_arr = [];
    for (let obj of languages){
      language_arr.push(obj['name'])
    }
    return language_arr
  }

  const country_currencies = () => {
    const currency_arr = [];
    for (let obj of currencies){
      currency_arr.push(obj['name'])
    }
    return language_arr
  }
  
  console.log(country_languages)
  console.log(country_currencies)

  
  return (
    <StyledCard >
      <div className="country-card">
        <div className="image-wrapper">
          <img src={flag} alt="country_flag" />
        </div>
        <div className="description bg-white">
          <h2 className="fs-homepage-items ff-sans fw-800">{name}</h2>
          <h5 className="ff-sans"><span className="fs-homepage-items text-lm-light-gray ff-sans fw-600">Native Name: </span>{population}</h5>
          <h5 className="ff-sans"><span className="fs-homepage-items text-lm-light-gray ff-sans fw-600">Population: </span>{region}</h5>
          <h5 className="ff-sans"><span className="fs-homepage-items text-lm-light-gray ff-sans fw-600">Europe: </span>{capital}</h5>
          <h5 className="ff-sans"><span className="fs-homepage-items text-lm-light-gray ff-sans fw-600">Sub region: </span>{capital}</h5>
          <h5 className="ff-sans"><span className="fs-homepage-items text-lm-light-gray ff-sans fw-600">Top Level Domain: </span>{capital}</h5>
          <h5 className="ff-sans"><span className="fs-homepage-items text-lm-light-gray ff-sans fw-600">Currencies: </span>{capital}</h5>
          <h5 className="ff-sans"><span className="fs-homepage-items text-lm-light-gray ff-sans fw-600">Languages: </span>{capital}</h5>
          <h5 className="ff-sans"><span className="fs-homepage-items text-lm-light-gray ff-sans fw-600">Border Countries: </span>{capital}</h5>

        </div>
      </div>
    </StyledCard>  
  )
}
export default CountryDetailCard;