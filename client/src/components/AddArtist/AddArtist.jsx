import './AddArtist.scss'
import React, { useState } from 'react';
import axios from 'axios';

const AddArtist = () => {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        music_styles: '',
        instruments: '',
        location: '',
        description: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/", formData);
            console.log('New artist added:', response.data);
            // You can add further actions here, such as displaying a success message or redirecting the user
        } catch (error) {
            console.error('Error adding new artist:', error);
            // You can handle errors here, such as displaying an error message to the user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
            <input type="text" name="music_styles" placeholder="Music Styles" value={formData.music_styles} onChange={handleChange} />
            <input type="text" name="instruments" placeholder="Instruments" value={formData.instruments} onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddArtist;

