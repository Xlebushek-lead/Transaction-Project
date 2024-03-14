import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpForm.css';

function SignUpFormComponent() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [showError, setShowError] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        checkIsFilled();
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        checkIsFilled();
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        checkIsFilled();
        if (confirmPassword !== event.target.value) {
            setPasswordsMatch(false);
        } else {
            setPasswordsMatch(true);
        }
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        checkIsFilled();
        if (password !== event.target.value) {
            setPasswordsMatch(false);
        } else {
            setPasswordsMatch(true);
        }
    };

    const checkIsFilled = () => {
        setIsFilled(
            username.trim() !== '' &&
            email.trim() !== '' &&
            password.trim() !== '' &&
            confirmPassword.trim() !== ''
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Перевірка чи всі поля заповнені
        if (!isFilled) {
            setShowError(true);
            return;
        }
    
        // Перевірка чи паролі співпадають
        if (password !== confirmPassword) {
            setPasswordsMatch(false);
            setShowError(true);
            return;
        }
    
        // Якщо ми дійшли сюди, то немає помилок
        // Обробка відправки даних
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        // Перенаправлення на іншу сторінку після успішної реєстрації
        navigate('/');
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    {showError && !username.trim() && (
                        <div className="error-message">
                            Please enter your username.
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {showError && !email.trim() && (
                        <div className="error-message">
                            Please enter your email.
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {showError && !password.trim() && (
                        <div className="error-message">
                            Please enter your password.
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    {showError && !confirmPassword.trim() && (
                        <div className="error-message">
                            Please confirm your password.
                        </div>
                    )}
                    {showError && !passwordsMatch && (
                        <div className="error-message">
                            Passwords do not match.
                        </div>
                    )}
                </div>
                <button type="submit">
                    Sign Up
                </button>
            </form>
            <Link to="/">Already have an account? Log in here</Link>
        </div>
    );
}

export default SignUpFormComponent;
