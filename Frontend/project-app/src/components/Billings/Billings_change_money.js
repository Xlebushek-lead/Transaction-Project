import React, { useState } from 'react';
import 'D:/Transaction-Project/Frontend/project-app/src/reset.css';
import { Link } from 'react-router-dom'; 
import './Billings_change_money.css'
import Billings_menu from './Billings_menu';

function Billings_change_money() {
    const [IntValue, setValue] = useState('4343'); // Початкове значення
   
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };
    function showDialog() {
        // Отримання значення введеного числа з інпута
        var number = document.getElementById("Billings_change_money-change").value;
        
        // Відображення значення числа в діалоговому вікні
        
        var numberDisplay = document.getElementById("Billings_change_money-balance");
        numberDisplay.textContent = "Ви ввели число: " + number;
        return number;
      }
    
    return (
        <div className="Billings_change_money-container">
            <div className='Billings_change_money-info__block'>
                <div className='Billings_change_money-title'>Змінити рахунок</div>
                <div className='Billings_change_money-balance'>{showDialog}</div> {/* Відображення введеного значення */}
                <div className='Billings_change_money-text__balance'>Загальний баланс</div>
                <div className='Billings_change_money-block'>
                    <div className='Billings_change_money-money'>
                        <input className='Billings_change_money-change' type='text'  value={IntValue}/> 
                    </div>
                </div>
                <div className='Billings_change_money-button__block'>
                    <button onclick="showDialog()"  className='Billings_change_money-button'>Змінити баланс</button> 
                </div>
                <Billings_menu balance={IntValue} />
            </div>
        </div>
    );
}

export default Billings_change_money;
