import React from 'react';
import './Register.css';
import FelsoNav from '../../components/Navbar/Navbar';

const Register = () => {
  const feltolt = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const statusz = document.querySelector('#statusz').value;
    // const avatar = document.querySelector('#myfile').files[0];
    
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('statusz', statusz);
    // formData.append('avatar', avatar);
    console.log(email);

    const response = await fetch('http://localhost:3500/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email),
    });

    const valasz = await response.json();

    if (response.ok) {
      window.alert(valasz.msg);
      window.location.replace('/login');
    } else {
      window.alert(valasz.msg);
    }
  };

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
              type="E-mail"
              placeholder="Email "
              id='email'
            />
          </div>
          <div className="input">
            <input
              type="Password"
              placeholder="Jelszó"
              id='password'
            />
          </div>
          <div className="input">
            <span>Előfizetői státusz:</span>
            <select id='statusz'>
              <option value="vip">VIP</option>
              <option value="Zsirkirály">Zsírkirály</option>
              <option value="Mindenható">Mindenható</option>
            </select>
          </div>
        </div>

        <div className="input">
          <label htmlFor="myfile">Tölts fel egy avatárt!</label>
          <input type="file" id="myfile" name="myfile" />
        </div>

        <div className="forgot-password">
          Van már fiókod? <a href="login">Jelentkezz be itt!</a>
        </div>
        <div className="submit=container">
          <button
            onClick={feltolt}
            className="button-37"
            role="button"
          >
            Regisztráció
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;