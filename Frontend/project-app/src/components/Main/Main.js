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
import BillingsMenu_cost from '../Billings/BillingsMenu_cost';

function Main({addDiv}) {
  const [imputValueMain, setInputValueMain] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [q, Q] = useState('');
  const [a, A] = useState('');
  const handleClick = () => {
    Q(imputValueMain);
    A(selectedValue)
    setInputValueMain('');
}
  const handleChange = (event) => {
    const newValue = event.target.value.replace(/\D/g, '');
    setInputValueMain(newValue);
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
          <input  onChange={handleChange} value={imputValueMain}   className="Main-money__text"  type="numbers" ></input>
          <select value={selectedValue} onChange={selectChange}  className='categaries_block'>
                <option value='Транспорт'> Транспорт </option>
                <option value='Продукти'> Продукти </option>
                <option value='Платежі'> Платежі </option>
                <option value='Розваги'> Розваги </option>
                <option value='Інше'> Інше </option>
            </select>
        </div>
        <div className='Main-sendMoney'>
          <button onClick={addDiv} className='Main-sendMoney__text'> Add money </button>      
        </div>
      </div>
      
      <Billings_menu q={q} a={a} />
      {false &&<BillingsMenu_cost q={q} a={a}/>}
    </div>
  );
}

export default Main;
