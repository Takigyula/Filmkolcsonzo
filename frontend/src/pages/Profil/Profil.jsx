import { useContext, useEffect, useState } from 'react';
import BelepContext from '../../utils/LoginContext';
import './Profil.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

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
  const [statusz, setStatusz] = useState('');

  useEffect(() => {
    const getNezo = async () => {
      try {
        const response = await fetch('http://localhost:3500/api/cinema/nezokfront');
        const data = await response.json();
        console.log(data);
        let email = localStorage.getItem('email');
        const nezo = data.nezok.filter((nezo) => nezo.email === email);
        setEmail(nezo[0].email);
        setStatusz(nezo[0].statusz);
      } catch (error) {
        console.error(error);
      }
    };

    getNezo();
    // eslint-disable-next-line
  }, []);

  const handleUpdate = async () => {
    if (newPassword === newPasswordAgain) {
      if (newAvatar && newPassword) {
        await updateNezo();
        await updatePassword();
      } else if (newAvatar) {
        await updateNezo();
      } else if (newPassword) {
        await updatePassword();
      }
    } else {
      alert('A két jelszó nem egyezik!');
    }
  };

  const updateNezo = async () => {
    try {
      const response = await fetch('http://localhost:3500/api/cinema/nezok/avatar', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, avatar: newAvatar }),
      });
      const data = await response.json();
      if (response.ok) {
        setAvatar(newAvatar);
        alert('Avatar sikeresen frissítve!');
        // Oldal frissítése
        window.location.reload();
      } else {
        alert('Hiba az avatar frissítése során!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updatePassword = async () => {
    try {
      const response = await fetch('http://localhost:3500/api/cinema/nezok/jelszo', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password: newPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Jelszó sikeresen frissítve!');
      } else {
        alert('Hiba a jelszó frissítése során!');
      }
    } catch (error) {
      console.error(error);
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
    <div className="profil-container">
      <Navbar profilSearch={true} />
      <div className="profil-header"></div>
      <div className="profil-body">
        <div className="profil-avatar">
          <img src={`/images/output/${avatar}`} alt="avatar" />
        </div>
        <div className="profil-info">
          <h2>{email}</h2>
          <p>Előfizetői státusz: {statusz}</p>
        </div>
        <div className="profil-form">
          <div className="kepek-container">
            <button onClick={felfed}>Válassz egy új avatárt!</button>
            <span className="avatar-name"></span>
            <div className="kepek-tarto">
              {kepek.map((elem, index) => (
                <div className="kep" key={index}>
                  <button onClick={() => beagyaz(elem)}>
                    <img src={elem} alt={`Avatar ${index + 1}`} />
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
        <div className="backtofooldal">
          <Link to="/">
            <button>Vissza a főoldalra</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profil;