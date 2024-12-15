import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';
import { useContext, useEffect, useState, useRef } from 'react';
import BelepContext from '../../utils/LoginContext';

const FelsoNav = ({
    filmekaktiv,
    sorozatokaktiv,
    loginaktiv,
    registeraktiv,
}) => {
    // console.log(filmekaktiv);
    // console.log(sorozatokaktiv);

    const filmekRef = useRef();
    const sorozatokRef = useRef();
    const loginRef = useRef();
    const registerRef = useRef();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const { getBelep, setBelep, getAdmin, setAdmin } = useContext(BelepContext);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(getBelep());
        setIsAdmin(getAdmin());

        if (filmekaktiv) {
            filmekRef.current.style.color = 'red';
            filmekRef.current.style.borderBottom = '2px solid red';
            sorozatokRef.current.style.color = 'white';
            loginRef.current.style.color = 'white';
            registerRef.current.style.color = 'white';
        } else if (sorozatokaktiv) {
            sorozatokRef.current.style.color = 'red';
            sorozatokRef.current.style.borderBottom = '2px solid red';
            filmekRef.current.style.color = 'white';
            loginRef.current.style.color = 'white';
            registerRef.current.style.color = 'white';
        } else if (loginaktiv) {
            loginRef.current.style.color = 'red';
            loginRef.current.style.borderBottom = '2px solid red';
            filmekRef.current.style.color = 'white';
            sorozatokRef.current.style.color = 'white';
            registerRef.current.style.color = 'white';
        } else if (registeraktiv) {
            registerRef.current.style.color = 'red';
            registerRef.current.style.borderBottom = '2px solid red';
            filmekRef.current.style.color = 'white';
            sorozatokRef.current.style.color = 'white';
            loginRef.current.style.color = 'white';
        }
    }, []);

    const kilep = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        setBelep(false);
        setAdmin(false);
        navigate('/');
    };

    return (
        <div className="navbar-container">
            <Link to="/">
                <img
                    src={logo}
                    className="logo-img"
                />
            </Link>
            {/* <input
            type="text"
            id="kereses"
            placeholder="Keresés..."
        /> */}
            <div className="filmek-sorozatok">
                <Link
                    to="/filmek"
                    ref={filmekRef}
                >
                    Filmek
                </Link>
                <Link
                    to="/sorozatok"
                    ref={sorozatokRef}
                >
                    Sorozatok
                </Link>
            </div>
            {isLoggedIn ? (
                <button onClick={kilep}>Kijelentkezés</button>
            ) : (
                <>
                    <div className="login-regisztracio">
                        <Link
                            className="nav_item"
                            to="/login"
                            ref={loginRef}
                        >
                            Bejelentkezés
                        </Link>
                        <Link
                            className="nav_item"
                            to="/register"
                            ref={registerRef}
                        >
                            Regisztráció
                        </Link>
                    </div>
                </>
            )}
            {isAdmin ? (
                <Link to="http://localhost:3500/api/cinema">Szerver</Link>
            ) : null}
        </div>
    );
};

export default FelsoNav;
