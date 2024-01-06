import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../utils/actions';

const Login = () => {

    const dispatch = useDispatch();
    const registerUser = useSelector((state) => state.registerUser);

   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registerUser.length !== 0){
            for (let i=0;i<registerUser.length;i++){
                if (registerUser[i].email === email){
                    if (registerUser[i].password === password) {
                        dispatch(setUser(true));
                        navigate('/ipo')
                        return;
                    }
                }
            }
        }

        return alert("Invalid credentials")       
    };

    return (
        <div className="main">
            <div className="loginDiv">
                <div className="loginFields">
                    <form onSubmit={handleSubmit} className="mx-auto loginFields">
                        <h2 className="text-center mb-4">Login</h2>
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

                        <button type="submit" className="btn green-btn">
                            Login
                        </button>
                        <div
                            type="button"
                            className="text-info"
                            data-mdb-ripple-init
                            data-mdb-ripple-color="light"
                            style={{ float: 'right', padding: '5px 20px' }}
                            onClick={()=> navigate('/register')}
                        >
                            Register
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
