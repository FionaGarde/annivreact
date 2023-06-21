import {React, useState, useEffect} from 'react';

import circle from './circle.svg';
import star from './star.svg';


import './App.css';

import { DateTime } from "luxon";

//DateTime.toLocaleString(DateTime.DATE_HUGE);
const now = DateTime.now();
const date = now.setLocale('fr').toFormat('cccc dd LLLL yyyy, t'); //=> 'Aug 6, 2014, 1:07 PM'

const slide = ["character_1.svg", "character_2.svg", "character_3.svg", "character_4.svg"];


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slide.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="App">
      <nav className="nav-banner">
        <div className='left-nav'>Anniversaires</div>
        <div className='rigth-nav' >{date}</div>
        
      </nav>
      <header className="App-header">
        <div className='header-left'>   
        <div className='App-color background'>
        <div className='ombre'>
            <img src={circle} className="App-circle" alt="circle" />  
          </div> 
          <div className='stars'>
            <div className='star1'><img src={star} className="App-star1" alt="star" /></div>
            <div className='star2'><img src={star} className="App-star2" alt="star" /></div>
            <div className='star3'><img src={star} className="App-star3" alt="star" />   </div>   </div> 
            <p className='name'>max richet</p>
          </div> 
        </div>
        <div className='header-right'>
          <div className='box'>
            <div className="carousel">
              {slide.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={index === currentIndex ? 'active' : ''}
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                />
              ))}
              </div>
          </div>

          <div className='barre'>

          </div>
          
        </div>
       
      </header>
    </div>
  );
}

export default App;


function getSlideClassName(index) {
  return index === 0 ? 'active' : '';
}

function getTranslateXValue(index) {
  if (index === slide.length - 1) {
    return slide.length * 100;
  }
  return index * 100;
}