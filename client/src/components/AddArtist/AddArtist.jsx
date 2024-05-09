import './AddArtist.scss'
import { useState } from 'react';
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
            alert("Tnak you for joining our platform!")

        } catch (error) {
            console.error('Error adding new artist:', error);
            alert('Failed to add artist')
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form__container'>
                <section className='form__login'>
                    <label className='form__label'>Your email and username</label>
                    <input className='form__input' type="email" name="email" 
                        placeholder="Email" value={formData.email} onChange={handleChange} />
                    <br></br>
                    <label className='form__label'>Choose your password:</label>
                    <input className='form__input' placeholder='Your Password'></input>
                    <input className='form__input' placeholder='Confirm Password'></input>
                </section>
                <section className='form__artistInfo'>
                    <label className='form__label2'>Fill out your information:</label>
                    <input className='form__input' type="text" name="name" 
                        placeholder="Name" value={formData.name} onChange={handleChange} />
                    <input className='form__input' type="text" name="type" 
                        placeholder="Type" value={formData.type} onChange={handleChange} />
                    <input className='form__input' type="text" name="music_styles" 
                        placeholder="Music Styles" value={formData.music_styles} onChange={handleChange} />
                    <input className='form__input' type="text" name="instruments" 
                        placeholder="Instruments" value={formData.instruments} onChange={handleChange} />
                    <select className='form__input' name="location" value={formData.location} onChange={handleChange}>
                        <option value="">Select Location</option>
                        <option value="Columbus, OH">Columbus, OH</option>
                        <option value="New York City, NY">New York City, NY</option>
                    </select>
                    <textarea className='form__text' type="text" name="description" placeholder="Description" 
                        value={formData.description} onChange={handleChange} />
                    {/* <input className='form__input' type="email" name="email" 
                        placeholder="Email" value={formData.email} onChange={handleChange} /> */}
                </section>
            </div>
            <button className='form__submit' type="submit">Submit</button> 
        </form>
    );
};

export default AddArtist;

