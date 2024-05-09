import AddArtist from '../../components/AddArtist/AddArtist'
import './SignUp.scss'

const SignUp = () => {
    return (
        <main className='signUp'>
            <h1 className='signUp__title'>Create a new account</h1>
            <AddArtist />
        </main>
    )
}
export default SignUp