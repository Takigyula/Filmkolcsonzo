import { useContext } from 'react';
import BelepContext from '../../utils/LoginContext';
import './Login.css';
import FelsoNav from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setBelep, setAdmin } = useContext(BelepContext);
    const navigate = useNavigate();

    const belep = async (event) => {
        event.preventDefault();

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        console.log(email, password);

        const response = await fetch('http://localhost:3500/api/cinema/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const valasz = await response.json();

        if (response.ok) {
            
            setBelep(true);
            setAdmin(valasz.regisztralt.admine);
            navigate('/'); // Sikeres bejelentkezés után átirányítás a filmek oldalra
        } else {
            window.alert(valasz.msg);
        }
    };

    return (
        <div className="login-container">
            <FelsoNav
                filmekaktiv={false}
                sorozatokaktiv={false}
                loginaktiv={true}
                registeraktiv={false}
            />
            <div className="login-form-container">
                <div className="header">
                    <div className="text">Bejelentkezés</div>
                    <div className="login-underline"></div>
                    <div className="inputs">
                        <div className="input">
                            <input
                                id="email"
                                type="E-mail"
                                placeholder="Email "
                            />
                        </div>
                        <div className="input">
                            <input
                                id="password"
                                type="Password"
                                placeholder="Jelszó"
                            />
                        </div>
                    </div>
                    <div className="forgot-password">
                        Nincs még fiókod?<a href="/register">Regisztrálj</a>
                    </div>
                    <div className="submit=container">
                        <button
                            onClick={belep}
                            className="button-37"
                            role="button"
                        >
                            Bejelentkezés
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;