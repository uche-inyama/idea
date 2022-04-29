import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Countries from './containers/CountriesList'
import FilterForm from './containers/FilterForm';

const App = () => {
  return (
    <div className="container App">
      <FilterForm />
      <Countries />
    </div>
  );
}

export default App;
