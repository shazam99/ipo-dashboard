import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../utils/actions';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username,
            email,
            password,
        };

        dispatch(registerUser(newUser));
        navigate('/login')
        
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="main">
            <div className="loginDiv">
                <div className="loginFields">
                <form onSubmit={handleSubmit} className="mx-auto loginFields">
                    <h2 className="text-center mb-4">Register</h2>

                    <div className="mb-4">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                        <button type="submit" className="btn green-btn" >
                        Register
                    </button>
                        <div
                            type="button"
                            className=" text-info"
                            data-mdb-ripple-init
                            data-mdb-ripple-color="light"
                            style={{ float: 'right',padding:'5px 20px' }}
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </div>
                </form>
            </div>
        </div>
      </div >
  )
}

export default Register