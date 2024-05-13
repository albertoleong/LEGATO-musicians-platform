import { useState, useEffect } from 'react';
import axios from 'axios';
import './Inquiries.scss'

const InquiriesComponent = ({ artistId }) => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/inquiries/artist/${artistId}`);
        setInquiries(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchInquiries();
  }, [artistId]);

  if (loading) {
    return <div>Loading inquiries...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className='inquiries'>
      <h2 className='inquiries__title'>My recent inquiries:</h2>
      <ul className='inquiries__list'>
        {inquiries.map((inquiry) => {
            const stamp = new Date(inquiry.date)
            const actualDate = stamp.toLocaleDateString()
            return (
            <li className='inquiries__item' key={inquiry.id}>
                <div className='inquiries__div'>
                    <label className='inquiries__label'>Contact:</label>
                    <p className='inquiries__text'>{inquiry.email}</p>
                </div>
                <div className='inquiries__div'>
                    <label className='inquiries__label'>Event Date:</label>
                    <p className='inquiries__text'>{actualDate}</p>
                </div>
                <div className='inquiries__div'>
                    <label className='inquiries__label'>Description:</label>
                    <p className='inquiries__text'>{inquiry.description}</p>
                </div>
                <button className='inquiries__button'>DONE</button>
            </li>
            )})}
      </ul>
    </section>
  );
};

export default InquiriesComponent;
