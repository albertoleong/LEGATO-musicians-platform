import './Login.scss'
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/login', 
            { email, password });
            sessionStorage.setItem("token", response.data.token);
            
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <main className='login'>
            <h2 className='login__title'>Login</h2>
            {error && <div>{error}</div>}
            <form className='login__form' onSubmit={handleSubmit}>
                <input 
                    className='login__input'
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input
                    className='login__input' 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button className='login__button' type="submit">Login</button>
            </form>
        </main>
    );
};

export default Login;
