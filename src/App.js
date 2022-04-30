import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CountryDetail from './containers/CountryDetail';
import Home from './containers/Home';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/:slug/details" element={<CountryDetail />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
