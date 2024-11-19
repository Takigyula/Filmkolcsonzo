import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';
import { useState } from 'react';

const FelsoNav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
            <Link>Sorozatok</Link>
            <Link to="/filmek">Filmek</Link>

            {isLoggedIn ? (
                <Link>Kijelentkezés</Link>
            ) : (
                <>
                    <Link>Bejelentkezés</Link>
                    <Link>Regisztráció</Link>
                </>
            )}
        </nav>
    );
};

export default FelsoNav;
