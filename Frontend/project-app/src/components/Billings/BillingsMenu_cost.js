import React, { useState } from 'react';
import './reset.css';
import Billings_menu from '../Billings/Billings_menu';
import { Link } from 'react-router-dom'; 
import { Router ,Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';


function BillingsMenu_cost(props) {
  const [productValue, setproductValue] = useState('Продукти'); 
  const [moneyValue, setmoneyValue] = useState('254'); 
  const changeCateraria = () => {
    setproductValue(inputValue);
  }
const changeMoney = () => {
  setmoneyValue(inputValue);
  
}
  return (
    <div className='BillingsMenu-categoreis_block'>
        <div>{productValue}</div>
        <div>{moneyValue}$</div>
    </div>
     
  );
}

export default BillingsMenu_cost;
