import { useContext } from 'react';
import BelepContext from '../../utils/LoginContext';
import './Login.css';

const Login = () => {
    const { setBelep, setAdmin } = useContext(BelepContext);
    localStorage.clear();

    const belep = async (event) => {
        event.preventDefault();

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        console.log(email, password);

        const response = await fetch('http://localhost:3500/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const valasz = await response.json();

        if (response.ok) {
            window.alert(valasz.msg);
            setBelep(true);
            setAdmin(valasz.regisztralt.admine);
            window.location.replace('/');
            console.log(valasz.regisztralt);
        } else {
            window.alert(valasz.msg);
        }
    };
    return (
        <div className='container'>
        <div className='header'>
        <div className='text'>Bejelentkezés</div>
        <div className='underline'></div>
        <div className="login-container">
                
    </div>
                <div className="inputs">
                        <div className="input">
                            <input type="E-mail" placeholder='Email ' />
                        </div>
                        <div className="input">
                            
                            <input type="Password" placeholder='Jelszó' />
                        </div>
                    </div>
                    <div className="forgot-password">Nincs még fiókod?<a href="/register">Regisztrálj</a></div>
                <div className="submit=container">
                <button onClick={belep} class="button-37" role="button">Bejelentkezés</button>
                </div>
            </div>
        </div>
        );
};

export default Login;
