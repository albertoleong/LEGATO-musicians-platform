import AddArtist from '../../components/AddArtist/AddArtist'
import './SignUp.scss'

const SignUp = () => {
    return (
        <main className='signUp'>
            <div className='signUp__login'>
                <p className='signUp__p'>Already have an account? </p>
                <button className='signUp__loginButton'>Login</button>
            </div>
            <h1 className='signUp__title'>Create a new account</h1>
            <AddArtist />
        </main>
    )
}
export default SignUp