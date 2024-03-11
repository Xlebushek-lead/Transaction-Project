import React, { useState } from 'react';
import '/Web/WEB-PROJECT/Transaction-Project-2/Frontend/project-app/src/reset.css';
import { Link } from 'react-router-dom'; 
import './Billings_change_money.css'
import Billings_menu from './Billings_menu';


function Billings_change_money() {
    
  return (
    <div className=" Billings_change_money-container">
      <div className=' Billings_change_money-info__block'>
        <div className=' Billings_change_money-title'>Змінити рахунок</div>
        <div className=' Billings_change_money-balance'>45445$</div>
        <div className=' Billings_change_money-text__balance'>Загальний баланс</div>
        <div className=' Billings_change_money-block'>
          <div className=' Billings_change_money-money'>
            <input  className='Billings_change_money-change' type='text'/>
          </div>
        </div>
        <div className=' Billings_change_money-button__block'>
          <button  className=' Billings_change_money-button'>Змінити баланс</button>
        </div>
      </div>
    </div>
  );
}

export default Billings_change_money;
