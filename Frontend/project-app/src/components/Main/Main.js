import React, { useState } from "react";
import "./reset.css";
import "./Main.css";
import Billings_menu from "../Billings/Billings_menu";
import Main_click_button from "./Main_click_button";
import Main_navigation from "./Main_navigation";
import { useFormContext } from "../../provider/SaveInputProvider";

function Main(props) {
  const { addInput } = useFormContext();
  const [selectedValueMain, setSelectedValueMain] = useState("");
  const [selectedValue, setSelectedValue] = useState("Транспорт");

  const handleChange = (event) => {
    setSelectedValueMain(event.target.value);
  };

  const selectChange = (event) => {
    console.log(event.target.value);
    setSelectedValue(event.target.value);
  };

  const handleAddMoney = () => {
    addInput(selectedValueMain, selectedValue);
    // Clear input fields if needed
    setSelectedValueMain("");
    setSelectedValue("Транспорт");
  };

  return (
    <div className="Main-container">
      <Main_navigation />
      <div className="Main-block2">
        <Main_click_button />
        <div className="Main-money__block">
          <p className="Main-money__dolar">$</p>
          <input
            onChange={handleChange}
            value={selectedValueMain}
            className="Main-money__text"
            type="text"
          />
          <select
            value={selectedValue}
            onChange={selectChange}
            className="categaries_block"
          >
            <option value="Транспорт"> Транспорт </option>
            <option value="Продукти"> Продукти </option>
            <option value="Платежі"> Платежі </option>
            <option value="Розваги"> Розваги </option>
            <option value="Інше"> Інше </option>
          </select>
        </div>
        <div className="Main-sendMoney">
          <button className="Main-sendMoney__text" onClick={handleAddMoney}>
            {" "}
            Add money{" "}
          </button>
        </div>
      </div>
      <Billings_menu
        selectedValueMain={selectedValueMain}
        selectedValue={selectedValue}
      />
    </div>
  );
}

export default Main;
