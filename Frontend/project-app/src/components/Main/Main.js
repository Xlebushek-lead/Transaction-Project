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
import { BrowserRouter } from 'react-router-dom';

function Main(props) {
  const [selectedValueMain, setSelectedValueMain] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValueMain(event.target.value); 
  }

  const selectChange = (event) => {
    setSelectedValue(event.target.value); 
  }

  return (
    <div className="Main-container">
      <Main_navigation/>
      <div className="Main-block2">
        <Main_click_button/>
        <div className="Main-money__block">
          <p className='Main-money__dolar'>$</p>
          <input onChange={handleChange} value={selectedValueMain}   className="Main-money__text"  type="text" ></input>
          <select value={selectedValue} onChange={selectChange}  className='categaries_block'>
                <option value='option1'> Транспорт </option>
                <option value='option2'> Продукти </option>
                <option value='option3'> Платежі </option>
                <option value='option4'> Розваги </option>
                <option value='option5'> Інше </option>
            </select>
        </div>
        <div className='Main-sendMoney'>
          <button className='Main-sendMoney__text'> Add money </button>      
        </div>
      </div>
      
      <Billings_menu selectedValueMain={selectedValueMain} selectedValue={selectedValue} />
    
    </div>
  );
}

export default Main;
