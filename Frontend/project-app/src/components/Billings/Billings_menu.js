import React, { useState } from 'react';
import '/Web/WEB-PROJECT/Transaction-Project-2/Frontend/project-app/src/reset.css';
import { Link } from 'react-router-dom'; 
import { Router ,Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';
import './Billings_menu.css'
import Billings_change_money from './Billings_change_money';


function Billings_menu(props) {

  
  return (
    <div className="BillingsMenu-container">
      <div className='BillingsMenu-info__block'>
        <div className='BillingsMenu-title'>Рахунки</div>
        <div className='BillingsMenu-balance'>{props.balance}</div>
        <div className='BillingsMenu-text__balance'>Загальний баланс</div>
        <div className='WalletsMenu-block'>
          <div className='WalletsMenu-name'><Link to='/WalletsMenu-name' className='Main-sendMoney__text1'>Змінити <br/>баланс</Link></div>
          <div className='WalletsMenu-name2'><Link to='/WalletsMenu-name2' className='Main-sendMoney__text1'>Додати <br/> гроші</Link></div>  
        </div>
        <div className='BillingsMenu-cost_block'>
            <div className='BillingsMenu-cost_title'>
                <div>Сьогодні</div>
                <div>4545$</div>
            </div>
            <div className='BillingsMenu-categoreis_container'>
                <div className='BillingsMenu-categoreis_block'>
                    <div>Транспорт</div>
                    <div>454$</div>
                </div>
                <div className='BillingsMenu-categoreis_block'>
                    <div>Продукти</div>
                    <div>254$</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Billings_menu;
