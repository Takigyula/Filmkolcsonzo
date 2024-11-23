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
        <div className="login-container">
            <form>
                <label htmlFor="email">E-mail:</label>
                <input
                    type="text"
                    id="email"
                />
                <br />
                <label htmlFor="password">Jelszó:</label>
                <input
                    type="text"
                    id="password"
                />
                <br />
                <button onClick={belep}>Belép</button>
            </form>
            <h2>
                Ha még nem regisztrált! <a href="/register">Regisztráció</a>
            </h2>
        </div>
    );
};

export default Login;
