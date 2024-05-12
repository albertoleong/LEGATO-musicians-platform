import { useNavigate } from 'react-router-dom'
import './DeleteModal.scss'

const DeleteModal = ({artist, onClose, onDelete}) => {

    const navigate = useNavigate()

    const handleDelete = () => {
        onDelete()
        navigate('/') 
    }

    return (
        <section className='delete'>
            <div className='delete__container'>
                <p className='delete__par'>Are you sure you want to delete your account?</p>
                <div className='delete__buttons'>
                    <button onClick={handleDelete} className='delete__button'>Delete Account</button>
                    <button onClick={onClose} className='delete__cancel'>Cancel</button>
                </div>
            </div>
        </section>
    )
}
export default DeleteModal