import React, { useState } from 'react';
import './reset.css';
import "./Main_choose_categaries.css";
import Main_click_button from './Main_click_button';
import { Link } from 'react-router-dom';


function Main_choose_categaries(props) {
  const [selectedValue, setSelectedValue] = useState('');
  function chooseCatgr(){
    setSelectedValue(selectedValue)
  }
  const selectChange = (event) => {
    setSelectedValue(event.target.value); 
  }
  return (
    <div className='alert_menu'>
        
        <div className='categaries'>
            <p className='Title'>Вибрати категорію</p>
            <select value={selectedValue} onChange={selectChange}  className='categaries_block'>
                <option value='option1'> Транспорт </option>
                <option value='option2'> Продукти </option>
                <option value='option3'> Платежі </option>
                <option value='option4'> Розваги </option>
                <option value='option5'> Інше </option>
            </select>
            <button onChange={chooseCatgr} className='categaries_button'><Link  to='/other' className='Maxin-sendMoney__text'> Додати витрату </Link></button>
        </div>
        {false &&<BillingsMenu_cost categoria={selectedValue}  />}
    </div>
    
  );
}

export default Main_choose_categaries;
