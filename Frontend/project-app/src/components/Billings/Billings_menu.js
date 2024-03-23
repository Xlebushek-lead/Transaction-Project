// Billings_menu.js
import React from "react";
import "./reset.css";
import { Link } from "react-router-dom";
import "./Billings_menu.css";
import Billings_change_money from "./Billings_change_money";
import BillingsMenu_cost from "./BillingsMenu_cost";
import { useFormContext } from "../../provider/SaveInputProvider";

function Billings_menu(props) {
  const { selectedInputs } = useFormContext();
  console.log(selectedInputs);
  return (
    <div className="BillingsMenu-container">
      <div className="BillingsMenu-info__block">
        <div className="BillingsMenu-title">Рахунки</div>
        <div className="BillingsMenu-balance">{props.balance}</div>
        <div className="BillingsMenu-text__balance">Загальний баланс</div>
        <div className="WalletsMenu-block">
          <div className="WalletsMenu-name">
            <Link to="/WalletsMenu-name" className="Main-sendMoney__text1">
              Змінити <br />
              баланс
            </Link>
          </div>
          <div className="WalletsMenu-name2">
            <Link to="/WalletsMenu-name2" className="Main-sendMoney__text1">
              Додати <br /> гроші
            </Link>
          </div>
        </div>
        <div className="BillingsMenu-cost_block">
          <div className="BillingsMenu-cost_title">
            <div>Сьогодні</div>
            {/* <div>{props.selectedValueMain}</div> Display entered amount */}
          </div>
          <div className="BillingsMenu-categoreis_container">
            {/* <div>{props.selectedValue}</div> Display selected category */}
            {selectedInputs.map((bill, index) => (
              <BillingsMenu_cost
                key={index}
                price={bill.number}
                text={bill.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billings_menu;
