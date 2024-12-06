import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';
import { useContext, useEffect, useState } from 'react';
import BelepContext from '../../utils/LoginContext';

const FelsoNav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const { getBelep, setBelep, getAdmin, setAdmin } = useContext(BelepContext);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(getBelep());
        setIsAdmin(getAdmin());
    }, []);

    const kilep = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        setBelep(false);
        setAdmin(false);
        navigate('/');
    };
return (
    <nav>
        <Link to="/">
            <img
                src={logo}
                className="logo-img"
            />
        </Link>
        <input
            type="text"
            id="kereses"
            placeholder="Keresés..."
        />
        <Link className='nav_item'>Sorozatok</Link>
        <Link className='nav_item' to="/filmek">Filmek</Link>
    
        {isLoggedIn ? (
            <button onClick={kilep}>Kijelentkezés</button>
        ) : (
            <>
                <Link className='nav_item' to="/login">Bejelentkezés</Link>
                <Link className='nav_item' to="/register">Regisztráció</Link>
            </>
        )}
        {isAdmin ? (
            <Link to="http://localhost:3500/api/cinema">Szerver</Link>
        ) : null}
    </nav>

);
    };
    
    export default FelsoNav;
    