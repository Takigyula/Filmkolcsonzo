import React from 'react';
import './Register.css';

const Register = () => {
    const feltolt = async (event) => {
        event.preventDefault();

        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        console.log(email, password);

        const response = await fetch('http://localhost:3500/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
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
        <div className='container'>
        <div className='header'>
        <div className='text'>Regisztráció</div>
        <div className='underline'></div>
                
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <input type="E-mail" placeholder='Email ' />
                        </div>
                        <div className="input">
                            
                            <input type="Password" placeholder='Jelszó' />
                        </div>
                    </div>
                    <div className="forgot-password">Helytelen jelszó? <span>Jelszó változtatás</span></div>
                    <input type="checkbox" id='aszfc'></input>
                    <div className="submit=container">
                    <button onClick={feltolt} className="button-37" role="button">Regisztráció</button>
                    </div>
                </div>
    );
};

export default Register;