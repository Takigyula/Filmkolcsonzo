import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';
import { useContext, useEffect, useState, useRef } from 'react';
import BelepContext from '../../utils/LoginContext';
import '../../App.css';
import SearchBar from '../../pages/Searchbar/Searchbar';
const FelsoNav = ({
    filmekaktiv,
    sorozatokaktiv,
    loginaktiv,
    registeraktiv,
    filmekSearch,
    sorozatokSearch,
    homeSearch,
    csomagSearch,
    registerSearch,
    loginSearch,
}) => {
    const filmekRef = useRef();
    const sorozatokRef = useRef();
    const loginRef = useRef();
    const registerRef = useRef();
    const csomagokRef = useRef();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [avatar, setAvatar] = useState('');
    const { getBelep, setBelep, getAdmin, getAvatar } = useContext(BelepContext);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(getBelep());
        setIsAdmin(getAdmin());
        setAvatar(getAvatar());

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
        setIsAdmin(false);
        localStorage.clear();
        navigate('/');
    };

    const profil = () => {
        navigate('/profil');
    };

    return (
        <div className="navbar-container">
            <Link to="/">
                <img
                    src={logo}
                    className="logo-img"
                />
            </Link>
            {
                filmekSearch ?   <SearchBar tartalom="film" /> :  null          }
            {
                sorozatokSearch ?   <SearchBar tartalom="sorozat" /> :  null          }
                {homeSearch ? <div className='home-ures'></div> :  null }
                {csomagSearch ? <div className='home-ures'></div> :  null }
                {registerSearch ? <div className='home-ures'></div> :  null }
                {loginSearch ? <div className='home-ures'></div> :  null }

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
                <Link
                    to="/csomagok"
                    ref={csomagokRef}
                >
                    Csomagok
                </Link>
            </div>
            {isLoggedIn ? (
                <div className="login-regisztracio">
                    {isAdmin ? (
               <Link id='adminserver' to="http://localhost:3500/api/cinema">Szerver</Link>
            ) : null}
                    <img
                        src={`/images/output/${avatar}`}
                        alt="avatar"
                        className="avatar-small"
                        onClick={profil}
                    />
                    <button
                        onClick={kilep}
                        className="btn-17"
                    >
                        Kijelentkezés
                    </button>
                </div>
            ) : (
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
            )}
        </div>
    );
};

export default FelsoNav;