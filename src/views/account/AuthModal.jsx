import { useState } from 'react'
import axios from 'axios'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { API_ENDPOINT } from '../../constants'

const AuthModal = ({ setShowModal, isSignUp }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);
    const [, setCookie] = useCookies(null);
    const navigate = useNavigate();

    const handleClick = () => {
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isSignUp && password !== confirmPassword) {
                setError('Passwords need to match!');
                return;
            }

            // Оберните асинхронный код внутри функции с ключевым словом async
            const response = await axios.post(`${API_ENDPOINT}/${isSignUp ? 'signup' : 'login'}`, {
                email,
                password,
            });

            setCookie('AuthToken', response.data.token);
            setCookie('UserId', response.data.userId);

            const success = response.status === 200;

            if (success) {
                if (isSignUp) navigate('/onboarding');
                else navigate('/dashboard');

                // Закрываем модальное окно
                setShowModal(false);

                // Перезагружаем страницу
                window.location.reload();
            }
        } catch (error) {
            console.log(error.response.data.message);
            setError(error.response.data.message);
        }
    };
    return (
        <div className='absolute w-sm h-full flex items-center'>
            <div className="auth-modal max-w-sm">
                <div className='flex w-full justify-end'>
                    <XMarkIcon className='w-6 h-6 right-[0px] cursor-pointer' onClick={handleClick}/>
                </div>
                <h2 className='text-center text-2xl mb-6'>{isSignUp ? 'CREATE ACCOUNT': 'LOG IN'}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        required={true}
                        className='mb-2'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        required={true}
                        className='mb-2'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {isSignUp && <input
                        type="password"
                        id="password-check"
                        name="password-check"
                        placeholder="confirm password"
                        required={true}
                        className='mb-2'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />}
                    <input className="mt-3 bn632-hover bn25" type="submit" value="Submit" />
                    <p>{error}</p>
                </form>
                <p className='text-center text-sm opacity-60'>By clicking Log In, you agree to our terms. <br /> Learn how we process your data in our Privacy Policy and Cookie Policy.</p>

            </div>
        </div>
    )
}

export default AuthModal