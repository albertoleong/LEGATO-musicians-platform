import './EditProfile.scss'
import { useState } from 'react';

const EditProfile = ({ artist, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({
        name: artist.name,
        type: artist.type,
        music_styles: artist.music_styles,
        instruments: artist.instruments,
        location: artist.location,
        description: artist.description
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData); 
    };

    return (
        <section className='edit'>
            <div className="edit__container">
                <span className="edit__close" onClick={onClose}>x</span>
                <h2 className='edit__title'>Edit Profile</h2>
                <form onSubmit={handleSubmit} className='edit__form'>
                    <label className='edit__label'>Name:</label>
                    <input 
                        className='edit__input'
                        type="text"
                        name="name"
                        defaultValue={formData.name}
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label className='edit__label'>Location:</label>
                    <select
                        className='edit__input'
                        name="location"
                        defaultValue={formData.location}
                        value={formData.location}
                        onChange={handleChange}
                    >
                        <option value="">Select location</option>
                        <option value="Columbus, OH">Columbus, OH</option>
                        <option value="New York City, NY">New York City, NY</option>
                    </select>
                    <label className='edit__label'>Type:</label>
                    <select
                        className='edit__input'
                        name="type"
                        defaultValue={formData.type}
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="">Select type</option>
                        <option value="Solo Artist">Solo artist</option>
                        <option value="Band">Band</option>
                    </select>
                    <label className='edit__label'>Music genres:</label>
                    <input 
                        type="text"
                        className='edit__input'
                        name="music_styles"
                        defaultValue={formData.music_styles}
                        value={formData.music_styles}
                        onChange={handleChange}
                    />
                    <label className='edit__label'>Instruments:</label>
                    <input 
                        type="text"
                        className='edit__input'
                        name="instruments"
                        defaultValue={formData.instruments}
                        value={formData.instruments}
                        onChange={handleChange}
                    />
                    <label className='edit__label'>Type:</label>
                    <textarea 
                        className='edit__input'
                        name="description"
                        defaultValue={formData.description}
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <button className='edit__save' type="submit">Save Changes</button>
                </form>
            </div>
        </section>
    );
};

export default EditProfile
