import { useContext, useEffect, useState } from 'react';
import BelepContext from '../../utils/LoginContext';
import './Profil.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'; // Add this import

const Profil = () => {
    const { getBelep, getAdmin, getAvatar, setAvatar } = useContext(BelepContext);
    const isLoggedIn = getBelep();
    const isAdmin = getAdmin();
    const avatar = getAvatar();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordAgain, setNewPasswordAgain] = useState('');
    const [newAvatar, setNewAvatar] = useState('');

    useEffect(() => {
        const getNezo = async () => {
            try {
                const response = await fetch('http://localhost:3500/api/cinema/nezokfront');
                const data = await response.json();
                console.log(data);
                let email = localStorage.getItem('email');
                const nezo = data.nezok.filter((nezo) => nezo.email === email);
                setEmail(nezo[0].email);
            } catch (error) {
                console.error(error);
            }
        };

        getNezo();
        // eslint-disable-next-line
    }, []);

    const updateNezo = async () => {
        try {
            const response = await fetch('http://localhost:3500/api/cinema/nezok', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, avatar: newAvatar }),
            });
            const data = await response.json();
            setAvatar(newAvatar);
        } catch (error) {
            console.error(error);
        }
    };

    const updatePassword = async () => {
        try {
            const response = await fetch('http://localhost:3500/api/cinema/nezok', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password: newPassword }),
            });
            const data = await response.json();
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdate = () => {
        if (newPassword === newPasswordAgain) {
            updateNezo();
            updatePassword();
        } else {
            alert('A két jelszó nem egyezik!');
        }
    };

    const felfed = () => {
        const kepekTarto = document.querySelectorAll('.kepek-tarto')[0];
        kepekTarto.style.display = 'grid';
    };

    const kepek = [
        '/images/output/avatar_001.png',
        '/images/output/avatar_002.png',
        '/images/output/avatar_003.png',
        '/images/output/avatar_004.png',
        '/images/output/avatar_005.png',
        '/images/output/avatar_006.png',
        '/images/output/avatar_007.png',
        '/images/output/avatar_008.png',
        '/images/output/avatar_009.png',
        '/images/output/avatar_010.png',
        '/images/output/avatar_011.png',
        '/images/output/avatar_012.png',
        '/images/output/avatar_013.png',
        '/images/output/avatar_014.png',
        '/images/output/avatar_015.png',
        '/images/output/avatar_016.png',
    ];

    function beagyaz(elem) {
        const kep = elem.split('/')[3];
        setNewAvatar(kep);
        const kepekTarto = document.querySelectorAll('.kepek-tarto')[0];
        kepekTarto.style.display = 'none';
        const avatarName = document.querySelectorAll('.avatar-name')[0];
        avatarName.style.display = 'inline-block';
        avatarName.innerText = kep;
    }

    return (
        <>
            <Navbar /> {/* Add the Navbar component here */}
            <div className="profil-container">
                <div className="profil-header">
                    <h1>Üdvözöljük!</h1>
                </div>
                <div className="profil-body">
                    <div className="profil-avatar">
                        <img src={`/images/output/${avatar}`} alt="avatar" />
                    </div>
                    <div className="profil-info">
                        <h2>{email}</h2>
                        <p>{isAdmin ? 'Admin' : ''}</p>
                    </div>
                    <div className="profil-form">
                    <div className="kepek-container">
                            <button onClick={felfed}>Válassz egy új avatárt!</button>
                            <span className="avatar-name"></span>
                            <div className="kepek-tarto">
                                {kepek.map((elem, index) => (
                                    <div
                                        className="kep"
                                        key={index}
                                    >
                                        <button onClick={() => beagyaz(elem)}>
                                            <img src={elem} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="jelszo-container">
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Új jelszó"
                            />
                            <input
                                type="password"
                                value={newPasswordAgain}
                                onChange={(e) => setNewPasswordAgain(e.target.value)}
                                placeholder="Új jelszó újra"
                            />
                        </div>
                     
                        <div className="mentes-container">
                            <button onClick={handleUpdate}>Mentés</button>
                        </div>
                    </div>
                    <div className='backtofooldal'>
                    <Link to="/">
                        <button>Vissza a főoldalra</button>
                    </Link>
                        
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default Profil;
