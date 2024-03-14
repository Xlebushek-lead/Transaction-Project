import React from 'react';
import './reset.css';
import { Link } from 'react-router-dom'; 
import { Router ,Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';
import './Billings.css'


function Billings(props) {
  return (
    <div className="Billings-container">
      <div className='Billings-info__block'>
        <div className='Billings-title'>Рахунки</div>
        <div className='Billings-balance'>{props.balance}$</div>
        <div className='Billings-text__balance'>Загальний баланс</div>
        <div className='Wallets-block'>
          <div className='Wallets-name'><Link to='/Wallets-name' className='Main-sendMoney__text'>Гроші</Link></div>
          <div className='Wallets-money'>45454$</div>
        </div>
        <div className='Billings-button__block'>
          <button className='Billings-button'>+Новий рахунок</button>
        </div>
      </div>
    </div>
  );
}

export default Billings;
