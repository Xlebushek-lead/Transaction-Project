import React from 'react';
import './reset.css';
import { Link } from 'react-router-dom'; 
import Billings_change_money from './Billings_change_money';
import BillingsMenu_cost from './BillingsMenu_cost';
import './Billings_menu.css'

function Billings_menu(props) {

  return (
    <div className="BillingsMenu-container">
      <div className='BillingsMenu-infoblock'>
        <div className='BillingsMenu-title'>Рахунки</div>
        <div className='BillingsMenu-balance'>{props.balance}</div>
        <div className='BillingsMenu-textbalance'>Загальний баланс</div>
        <div className='WalletsMenu-block'>
          <div className='WalletsMenu-name'><Link to='/WalletsMenu-name' className='Main-sendMoneytext1'>Змінити <br/>баланс</Link></div>
          <div className='WalletsMenu-name2'><Link to='/WalletsMenu-name2' className='Main-sendMoneytext1'>Додати <br/> гроші</Link></div>
        </div>
        <div className='BillingsMenu-cost_block'>
            <div className='BillingsMenu-cost_title'>
                <div>Сьогодні</div>
                <div>{props.selectedValueMain}</div> {/* Display entered amount /}
            </div>
            <div className='BillingsMenu-categoreis_container'>
                <div>{props.selectedValue}</div> {/ Display selected category */}
                <BillingsMenu_cost/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Billings_menu;