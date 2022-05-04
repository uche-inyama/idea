import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CountryDetail from './containers/CountryDetail';
import Home from './containers/Home';

const App = () => {
  const [mode, setMode] = useState('dark')

  const changeMode = (mode) => {
    const element1 = document.querySelector('body')
    const element2 = document.querySelectorAll('.description')
    const element3 = document.querySelector('.header')
    const element4 = document.querySelector('.search-filter-wrapper')

    console.log(element2)
    if(mode === 'dark'){
      element1.style.backgroundColor = 'hsl(207, 26%, 17%)'
      element1.style.color = 'hsl(0, 0%, 100%)';
      element3.style.backgroundColor = ' hsl(207, 26%, 17%)'
      element3.style.color = 'hsl(0, 0%, 100%)';
      if(!element4) return;
      element4.style.backgroundColor = 'hsl(207, 26%, 17%)';
      element4.style.color = 'hsl(0, 0%, 100%)';
      for(let ele of element2){
        ele.style.backgroundColor = 'hsl(0, 0%, 52%)'
        ele.style.color = 'hsl(0, 0%, 100%)';
      }
    }else{
      element1.style.backgroundColor = 'hsl(0, 0%, 98%)'
      element1.style.color = 'hsl(209, 23%, 22%)';
      element3.style.backgroundColor = 'hsl(0, 0%, 98%)'
      element3.style.color = 'hsl(209, 23%, 22%)';
      if(!element4) return;
      element4.style.backgroundColor = 'hsl(0, 0%, 98%)';
      element4.style.color = 'hsl(209, 23%, 22%)';
      for(let ele2 of element2){
        ele2.style.backgroundColor = 'hsl(0, 0%, 98%)'
        ele2.style.color = 'hsl(209, 23%, 22%)';
      }
      
    }
  }

  const handleChange = (e) => {
    console.log(`hey:${mode}`)
  
    if(mode === 'light'){
      changeMode(mode)
      setMode('dark')
    }else{
      setMode('light')
      changeMode(mode)
    }
  } 
  return (
    <>
      <div className="header">
        <div>Where in the world</div>
        <div onClick={handleChange}>
          <i className="fa-solid fa-moon"></i>
        </div>
      </div>
      <div className="container bg-lm-light-gray">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/:slug/details" element={<CountryDetail />}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
