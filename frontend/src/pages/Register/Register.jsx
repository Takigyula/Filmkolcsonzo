import './Register.css';
import FelsoNav from '../../components/Navbar/Navbar';
import { useState } from 'react';

const Register = () => {
    const [avatar, setAvatar] = useState('');
    const feltolt = async (event) => {
        event.preventDefault();

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const statusz = document.querySelector('#statusz').value;

        console.log(email, password, statusz, avatar);

        const response = await fetch(
            'http://localhost:3500/api/cinema/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    statusz,
                    avatar,
                }),
            }
        );

        const valasz = await response.json();

        if (response.ok) {
            window.alert(valasz.msg);
            window.location.replace('/login');
        } else {
            window.alert(valasz.msg);
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
        setAvatar(kep);
        const kepekTarto = document.querySelectorAll('.kepek-tarto')[0];
        kepekTarto.style.display = 'none';
        const avatarName = document.querySelectorAll('.avatar-name')[0];
        avatarName.style.display = 'inline-block';
        avatarName.innerText = kep;
    }

    return (
        <div className="register-container">
            <FelsoNav
                filmekaktiv={false}
                sorozatokaktiv={false}
                loginaktiv={false}
                registeraktiv={true}
            />
            <div className="register-form-container">
                <div className="header">
                    <div className="text">Regisztráció</div>
                    <div className="register-underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Email "
                            id="email"
                        />
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Jelszó"
                            id="password"
                        />
                    </div>
                    <div className="input">
                        <span id="elofizetoi-statusz">Előfizetői státusz:</span>
                        <select id="statusz">
                            <option value="vip">VIP</option>
                            <option value="Zsírkirály">Zsírkirály</option>
                            <option value="Mindenható">Mindenható</option>
                        </select>
                    </div>
                    <div className="input">
                        <button onClick={felfed}>Válassz egy avatárt!</button>
                        <span className="avatar-name"></span>
                        {/* <input
                            type="file"
                            id="myfile"
                            name="myfile"
                        /> */}
                    </div>
                </div>

                <div className="submit=container">
                </div>
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
                            <div className="forgot-password">
                                Van már fiókod? <a href="login">Jelentkezz be itt!</a>
                            </div>
                    <button
                        onClick={feltolt}
                        className="button-37"
                        role="button"
                    >
                        Regisztráció
                    </button>
            </div>
        </div>
    );
};

export default Register;
