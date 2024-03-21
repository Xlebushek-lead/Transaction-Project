// Main.js
import React, { useState } from 'react';
import './reset.css';
import "./Main.css";
import Billings_menu from '../Billings/Billings_menu';
import Billings_change_money from '../Billings/Billings_change_money';
import Main_click_button from './Main_click_button';
import Main_navigation from './Main_navigation'
import { Link } from 'react-router-dom'; 
import Main_choose_categaries from './Main_choose_categaries';
import { Router ,Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';
import Billings from '../Billings/Billings';

function Main(props) {
  const [selectedValueMain, setSelectedValueMain] = useState('');
  function addmoney(){
    setSelectedValueMain(selectedValueMain)
  }
  const handleChange = (event) => {
    setSelectedValueMain(event.target.value); 
  }


  return (
    <div className="Main-container">
      <Main_navigation/>
      <div className="Main-block2">
        <Main_click_button/>
        <div className="Main-money__block">
          <p className='Main-money__dolar'>$</p>
          <input onChange={handleChange} value={selectedValueMain}   className="Main-money__text"  type="text" ></input>
        </div>
        <div className='Main-sendMoney'>
          <Link to='/second-page' className='Main-sendMoney__text'> Add money </Link>      
        </div>
      </div>
      
      <Billings_menu  />
    
    </div>
  );
}

export default Main;
