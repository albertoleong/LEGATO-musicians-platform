import './Login.scss'
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const navigate = useNavigate()
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         try {
//             const response = await axios.post('http://localhost:8080/login', 
//             { email, password });
//             sessionStorage.setItem("token", response.data.token);
//             alert('Welcome back!')
//             navigate('/profile')
//         } catch (err) {
//             setError(err.response.data);
//             alert("Failed to login")
//         }
//     };

//     return (
//         <main className='login'>
//             <h2 className='login__title'>Login Information</h2>
//             {error && <div>{error}</div>}
//             <form className='login__form' onSubmit={handleSubmit}>
//                 <input 
//                     className='login__input'
//                     type="email" 
//                     placeholder="Email" 
//                     value={email} 
//                     onChange={(e) => setEmail(e.target.value)} 
//                     required 
//                 />
//                 <input
//                     className='login__input' 
//                     type="password" 
//                     placeholder="Password" 
//                     value={password} 
//                     onChange={(e) => setPassword(e.target.value)} 
//                     required 
//                 />
//                 <button className='login__button' type="submit">Login</button>
//             </form>
//         </main>
//     );
// };

// export default Login;

import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // Use the useAuth hook to access login function
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/login', 
            { email, password });
            login(); // Call the login function provided by the context
            alert('Welcome back!')
            navigate('/profile')
        } catch (err) {
            setError(err.response.data);
            alert("Failed to login")
        }
    };

    return (
        <main className='login'>
            <h2 className='login__title'>Login Information</h2>
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
