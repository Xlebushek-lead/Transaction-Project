import React, { useState } from 'react';
import './reset.css';
import { Link } from 'react-router-dom'; 
import './Billings_change_money.css'
import Billings_menu from './Billings_menu';

function Billings_change_money() {
    const [inputValue, setInputValue] = useState(''); 
    const [displayValue, setDisplayValue] = useState(''); 

    const handleChange = (event) => {
        setInputValue(event.target.value); 
    }
    const handleClick = () => {
        setDisplayValue(inputValue);
        
    }
    
    return (
        <div className="Billings_change_money-container">
            <div className='Billings_change_money-info__block'>
                <div className='Billings_change_money-title'>Змінити рахунок</div>
                <div className='Billings_change_money-balance'>{displayValue}</div> 
                <div className='Billings_change_money-text__balance'>Загальний баланс</div>
                <div className='Billings_change_money-block'>
                    <div className='Billings_change_money-money'>
                        <input
                            className='Billings_change_money-change'
                            type='text'
                            value={inputValue}
                            onChange={handleChange}  
                        /> 
                        <button onClick={handleClick} className='Billings_change_money-button'>Змінити</button>
                    </div>
                </div>
                {false &&<Billings_menu balance={displayValue}  />}
            </div>
        </div>
    );
}

export default Billings_change_money;
