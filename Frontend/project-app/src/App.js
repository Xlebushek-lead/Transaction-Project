import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Billings_menu from './components/Billings/Billings_menu';
import Main from './components/Main/Main';
import Main_choose_categaries from './components/Main/Main_choose_categaries';
import Billings from './components/Billings/Billings';
import Billings_change_money from './components/Billings/Billings_change_money';
import LoginPage from './components/Login/Login_page'; 
import SignUpFormComponent from './components/Login/SignUpForm'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/SignPage" element={<SignUpFormComponent />} />
        <Route path="/second-page" element={<Main_choose_categaries />} />
        <Route path="/other" element={<Main />} />
        <Route path="/billing-nav" element={<Billings />} />
        <Route path="/Wallets-name" element={<Billings_menu />} />
        <Route path="/WalletsMenu-name" element={<Billings_change_money />} />
        <Route path="/WalletsMenu-name2" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;