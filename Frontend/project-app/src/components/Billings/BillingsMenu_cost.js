import React, { useState } from 'react';
import './reset.css';
import Billings_menu from '../Billings/Billings_menu';
import { Link } from 'react-router-dom'; 
import { Router ,Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';


function BillingsMenu_cost(props) {
    const addDiv = () => {
      // Створення нового div
      const newDivBlock = document.querySelector('.BillingsMenu-categoreis_block');
      const newDiv1 = document.createElement('div');
      const newDiv2 = document.createElement('div');
      newDiv1.innerHTML = props.a; 
      newDiv2.innerHTML = props.q; 
      newDivBlock.appendChild(newDiv1);
      newDivBlock.appendChild(newDiv2);
    };   
  return (
    <div className='BillingsMenu-categoreis_block'>
        <Main addDiv={addDiv}/>
    </div>
     
  );
}

export default BillingsMenu_cost;
