import React, { useState } from 'react';
import './reset.css';
import "./Main.css";
import Billings_menu from '../Billings/Billings_menu';
import Main_click_button from './Main_click_button';
import Main_navigation from './Main_navigation'
import { Link } from 'react-router-dom'; 
import Main_choose_categaries from './Main_choose_categaries';
import { Router ,Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';


function Main() {

  return (
    <div className="Main-container">
      <Main_navigation/>
      <div className="Main-block2">
        <Main_click_button/>
        <div className="Main-money__block">
          <p className='Main-money__dolar'>$</p>
          <input className="Main-money__text"  type="text" ></input>
        </div>
        <div className='Main-sendMoney'>
          {/* Використовуйте компонент Link для навігації */}
          <Link to='/second-page' className='Main-sendMoney__text'> Add Money </Link>      
        </div>
      </div>
      
    </div>
  );
}

export default Main;
