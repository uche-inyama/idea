import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Countries from './containers/CountriesList'

const App = () => {
  return (
    <div className="container App">
      <Countries />
    </div>
  );
}

export default App;
