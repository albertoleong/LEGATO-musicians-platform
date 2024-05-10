import './Profile.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../AuthContext';

const Profile = () => {
    const { isLoggedIn } = useAuth();
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        try {
            const token = sessionStorage.getItem('token'); 
            const response = await axios.get('http://localhost:8080/account', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error)
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            fetchUserData();
        }
    }, [isLoggedIn]);

    return (
        <main className='account'>
            {userData ? (
                <h1>Welcome to your profile {userData.name}</h1>
            ) : (
                <h1>Loading...</h1>
            )}
        </main>
    )
}

export default Profile;

