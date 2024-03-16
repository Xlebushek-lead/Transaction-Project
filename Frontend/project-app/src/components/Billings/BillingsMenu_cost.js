import React, { useState } from 'react';
import './reset.css';
import Billings_menu from '../Billings/Billings_menu';
import { Link } from 'react-router-dom'; 
import { Router ,Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';


function BillingsMenu_cost() {

  return (
    <div className='BillingsMenu-categoreis_block'>
        <div>Продукти</div>
        <div>254$</div>
    </div>
     
  );
}

export default BillingsMenu_cost;
