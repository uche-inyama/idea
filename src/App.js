import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Countries from './containers/CountriesList'
import FilterForm from './containers/FilterForm';
import SearchForm from './containers/SearchForm';

const App = () => {
  return (
    <div className="container App">
      <FilterForm />
      <Countries />
      <SearchForm />
    </div>
  );
}

export default App;
