import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CountryDetail from './containers/CountryDetail';
import Home from './containers/Home';

const App = () => {
  const [mode, setMode] = useState('Dark Mode')

  const changeMode = (mode) => {
    const element1 = document.querySelector('body');
    const element2 = document.querySelectorAll('.description');
    const element3 = document.querySelector('.header');
    const element4 = document.querySelector('.search-filter-wrapper');
    const element5 = document.querySelectorAll('.input');
    const element6 = document.querySelector('.text')

    if(mode === 'Dark Mode'){
      element1.style.backgroundColor = 'hsl(207, 26%, 17%)'
      element1.style.color = 'hsl(0, 0%, 100%)';
      element3.style.backgroundColor = 'hsl(209, 23%, 22%)' 
      element3.style.color = 'hsl(0, 0%, 100%)';
      if(!element4) return;
      element4.style.backgroundColor = 'hsl(207, 26%, 17%)';
      element4.style.color = 'hsl(0, 0%, 100%)';
      element6.style.color = 'hsl(0, 0%, 100%)';
      for(let ele of element2){
        ele.style.backgroundColor = 'hsl(209, 23%, 22%)';
        ele.style.color = 'hsl(0, 0%, 100%)';
      }
      for(let ele5 of element5){
        ele5.style.backgroundColor = 'hsl(209, 23%, 22%)'
        ele5.style.color = 'hsl(0, 0%, 100%)';
      }
    }else{
      element1.style.backgroundColor = 'hsl(0, 0%, 98%)'
      element1.style.color = 'hsl(209, 23%, 22%)';
      element3.style.backgroundColor = 'hsl(0, 0%, 100%)' 
      element3.style.color = 'hsl(209, 23%, 22%)';
      if(!element4) return;
      element4.style.backgroundColor = 'hsl(0, 0%, 98%)';
      element4.style.color = 'hsl(209, 23%, 22%)';
      element6.style.color = 'hsl(209, 23%, 22%)';
      for(let ele2 of element2){
        ele2.style.backgroundColor = 'hsl(0, 0%, 98%)'
        ele2.style.color = 'hsl(209, 23%, 22%)';
      }
      for(let ele5 of element5){
        ele5.style.backgroundColor = 'hsl(0, 0%, 100%)'
        ele5.style.color = 'hsl(0, 0%, 52%)';
      }
    }
  }

  const handleChange = (e) => {
    console.log(`hey:${mode}`)
  
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
      <div className="header">
        <div className="header-title">Where in the world?</div>
        <div onClick={handleChange}>
          <i className="fa-solid fa-moon"></i>
          <span className="mode">{mode}</span>
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
