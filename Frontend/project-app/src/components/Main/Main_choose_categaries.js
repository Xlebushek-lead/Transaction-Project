import React, { useState } from 'react';
import 'D:/Transaction-Project/Frontend/project-app/src/reset.css';
import "./Main_choose_categaries.css";
import Main_click_button from './Main_click_button';
import { Link } from 'react-router-dom';


function Main_choose_categaries() {
  
  return (
    <div className='alert_menu'>
        
        <div className='categaries'>
            <p className='Title'>Вибрати</p>
            <ol className='categaries_block'>
                <li><Link  to='/other' className='Maxin-sendMoney__text'> Транспорт </Link></li>
                <li><Link  to='/other' className='Maxin-sendMoney__text'> Продукти </Link></li>
                <li><Link  to='/other' className='Maxin-sendMoney__text'> Платежі </Link></li>
                <li><Link  to='/other' className='Maxin-sendMoney__text'> Розваги </Link></li>
                <li><Link  to='/other' className='Maxin-sendMoney__text'> Інше </Link></li>
            </ol>
        </div>
    </div>
    
  );
}

export default Main_choose_categaries;
