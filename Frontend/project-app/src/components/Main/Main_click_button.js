import React, { useState } from 'react';
import './reset.css';
import "./Main_click_button.css";

function Main_click_button() {
  // Використання useState для збереження стану елементів
  const [backgroundColor1, setBackgroundColor1] = useState("transparent");
  const [backgroundColor2, setBackgroundColor2] = useState("transparent");

  // Функція для зміни кольору фону при кліці на елемент
  const handleElementClick1 = () => {
    setBackgroundColor1("black");
    setBackgroundColor2("transparent"); // Зміна стилів для другого елемента
  };
  const handleElementClick2 = () => {
    setBackgroundColor2("black");
    setBackgroundColor1("transparent"); // Зміна стилів для першого елемента
  };

  return (
    <div className="Main-block2__text"> 
        <p className="block2__text1" onClick={handleElementClick1} style={{ backgroundColor: backgroundColor1 }}>Витрати </p>
        <p className="block2__text2" onClick={handleElementClick2} style={{ backgroundColor: backgroundColor2 }}>Доходи</p>
    </div>   
  );
}

export default Main_click_button;
