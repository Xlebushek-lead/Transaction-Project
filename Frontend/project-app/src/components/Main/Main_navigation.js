import React from 'react';
import './reset.css';
import "./Main.css";
import Main_click_button from './Main_click_button';
import { Link } from 'react-router-dom'; 
import Main_choose_categaries from './Main_choose_categaries';
import { Router ,Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';
import './Main_navigation.css'
function Main_navigation() {
  return (
    <div className="Main-block1"> 
        <div className="Main-nav"><Link to='/billing-nav' className='Main-sendMoney__text'>Рахунки</Link></div>
        <div className="Main-nav"><Link to='/AnaliticsPage' className='Main-sendMoney__text'>Аналітика</Link></div>
        <div className="Main-nav"><Link to='/setting-nav' className='Main-sendMoney__text'>Налаштування</Link></div>
    </div>
  );
}

export default Main_navigation;
