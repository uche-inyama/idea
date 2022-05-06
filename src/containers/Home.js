import React from 'react'
import FilterForm from './FilterForm'
import SearchForm from './SearchForm'
import CountriesList from './CountriesList'

const Home = () => {
  return (
    <div className="home">
      <div className="search-filter-wrapper">
        <SearchForm />
        <FilterForm />
      </div>
      <CountriesList />
    </div>
  )
}

export default Home;