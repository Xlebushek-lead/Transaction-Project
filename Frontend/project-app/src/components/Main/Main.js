import React, { useState } from 'react';
import "./Main.css";
import Main_click_button from './Main_click_button';


function Main() {
  
  return (
    <div className="Main-container">
      <div className="Main-block1"> 
        <div className="Main-text">Рахунки</div>
        <div className="Main-text">Аналітика</div>
        <div className="Main-text">Налаштування</div>
      </div>
      <div className="Main-block2">
        <Main_click_button/>
      </div>
    </div>
  );
}

export default Main;
