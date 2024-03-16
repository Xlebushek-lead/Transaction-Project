import React, { useState } from 'react';
import './reset.css';

import { Link } from 'react-router-dom'; 
import './Login_page.css' 
import { Router ,Routes, Route, BrowserRouter } from 'react-router-dom'; 
import Login_page from './Login_page';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setIsFilled(event.target.value.trim() !== '' && password.trim() !== '');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setIsFilled(username.trim() !== '' && event.target.value.trim() !== '');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Перевірка чи всі поля заповнені
        if (!isFilled) {
            setShowError(true); // Встановлюємо стан помилки на true
            return;
        }
        // Обробка відправки інформації
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <form className='Form' onSubmit={handleSubmit}>
                <h2 className='title'>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                {showError && (
                    <div className="error-message">
                        Please fill in all fields.
                    </div>
                )}
                {/* Перемістіть посилання поза кнопку */}
                <div className='LogintoMain_block'>
                    <Link to={isFilled ? '/other' : ''} className='LogintoMain'>
                        <button className='LogintoMain_button' type="submit" disabled={!isFilled}>
                            Login
                        </button>
                    </Link>
                </div>
                <div className='SignPage_block'>
                    <Link className='SignPage_text' to="/SignPage">Don't have an account? Sign up here</Link>
                    </div>
            </form>
            
        </div>
    );
}

export default LoginPage;