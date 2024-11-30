import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
    const [page, setPage] = useState('login'); // State to manage the current page
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post('http://localhost:3000/login', { username, password })
            .then(response => alert(response.data))
            .catch(error => alert(error.message));
    };

    const handleRegister = () => {
        axios.post('http://localhost:3000/register', { username, password })
            .then(response => alert(response.data))
            .catch(error => alert(error.message));
    };

    return (
        <div className="container">
            {page === 'login' && (
                <div className="form-container">
                    <h1 style={{ color: 'blue', fontFamily: 'Lobster' }}>The App</h1>
                    <h2 style={{ color: 'gray' }}>Login</h2>
                    <input
                        type="text"
                        placeholder="E-mail"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                    <button onClick={handleLogin} className="submit-button">Login</button>
                    <p className="signup-link">Don't have an account? <span onClick={() => setPage('register')} style={{ cursor: 'pointer', color: '#007bff' }}>Sign Up</span></p>
                </div>
            )}

            {page === 'register' && (
                <div className="form-container">
                    <h2 style={{ color: 'gray' }}>Register</h2>
                    <input
                        type="text"
                        placeholder="E-mail"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                    <button onClick={handleRegister} className="submit-button">Register</button>
                    <p className="signup-link">Already have an account? <span onClick={() => setPage('login')} style={{ cursor: 'pointer', color: '#007bff' }}>Login</span></p>
                </div>
            )}
        </div>
    );
}

export default App;
