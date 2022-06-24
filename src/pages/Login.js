import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location);

    const [ userLogin, setUserLogin ] = useState({ email: '', password: '' })

    const handleChange = (event) => {
        setUserLogin((currState) => {
            return { ...currState, [event.target.id]: event.target.value}
        })
    }

    const login = async(event) => {
        event.preventDefault();

        try {
            let response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                body: JSON.stringify(userLogin),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                let data = await response.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                //arahkan ke halaman yang dia inginkan sebelum diarahkan ke halaman login
                
                if (!location.state.from) {
                    navigate('/')
                } else {    
                    navigate(location.state.from.pathname)
                }
            } else {
                throw Error('Something wrong when login')
            }
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
        <div className="row">
        <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Login Page</h2>
            <div className="card my-5">

            <form className="card-body cardbody-color p-lg-5">

                <div className="text-center">
                <img src="https://i.ytimg.com/vi/dqNtBrVZQR4/mqdefault.jpg" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px" alt="profile" />
                </div>

                <div className="mb-3">
                <input type="text" className="form-control" id="email" aria-describedby="emailHelp"
                    placeholder="Email" value={userLogin.email} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                <input type="password" className="form-control" id="password" placeholder="password" value={userLogin.password} onChange={handleChange}/>
                </div>
                <div className="text-center"><button type="submit" onClick={login} className="btn btn-warning btn-color px-5 mb-5 w-100">Login</button></div>
                <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                Registered? <a href="#" className="text-dark fw-bold"> Create an
                    Account</a>
                </div>
            </form>
            </div>

        </div>
        </div>
    </div>
    );
}

export default Login;
