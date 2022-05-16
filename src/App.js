import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import CountryDetail from './containers/CountryDetail';
import Home from './containers/Home';
import { changeMode } from './helper/mode'

const App = () => {
  const [mode, setMode] = useState('Dark Mode')

  const handleChange = (e) => {  
    if(mode === 'Light Mode'){
      changeMode(mode)
      setMode('Dark Mode')
    }else{
      setMode('Light Mode')
      changeMode(mode)
    }
  }
  
  return (
    <>
      <Router>
        <div className="header">
          <div className="header-title">Where in the world?</div>
          <div onClick={handleChange}>
            <i className="fa-solid fa-moon"></i>
            <span className="mode">{mode}</span>
          </div>
        </div>
        <div className="container bg-lm-light-gray">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/:slug/details" element={<CountryDetail />}/>
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
