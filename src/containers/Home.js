import React from 'react'
import FilterForm from './FilterForm'
import SearchForm from './SearchForm'
import CountriesList from './CountriesList'


const Home = () => {
  return (
    <div>
      <FilterForm />
      <SearchForm />
      <CountriesList />
    </div>
  )
}

export default Home;