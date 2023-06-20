import React from 'react';

import ch1 from './character_1.svg';
//import ch2 from './character_2.svg';
//import ch3 from './character_3.svg';
//import ch4 from './character_4.svg';
import circle from './circle.svg';
import star from './star.svg';

import Date from './components/date';

import './App.css';

import { DateTime } from "luxon";

//DateTime.toLocaleString(DateTime.DATE_HUGE);
const now = DateTime.now();
const date = now.setLocale('fr').toFormat('cccc dd LLLL yyyy, t'); //=> 'Aug 6, 2014, 1:07 PM'



function App() {
  return (
    <div className="App">
      <nav className="nav-banner">
        <div className='left-nav'>Anniversaires</div>
        <div className='rigth-nav' >{date}</div>
        
      </nav>
      <header className="App-header">
        <div className='header-left'>   
        <div className='App-color'>
        <div className='ombre'>
            <img src={circle} className="App-circle" alt="circle" />  
          </div>  
            <img src={star} className="App-star1" alt="star" />
            <img src={star} className="App-star2" alt="star" />
            <img src={star} className="App-star3" alt="star" />      
            <p className='name'>max richet</p>
          </div> 
        </div>
        <section className='header-right'>
          <div className='box'>
            <img src={ch1} className="App-ch1" alt="character" />  
          </div>
        </section>
       
      </header>
    </div>
  );
}

export default App;
