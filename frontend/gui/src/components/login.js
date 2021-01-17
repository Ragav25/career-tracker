
import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';

export const Login = () => {
    const history = useHistory();
    const initialFormData = Object.freeze({
        email: '',
        password: '',
    });

    const [ formData, setFormData ] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				history.push('/');
				//console.log(res);
				//console.log(res.data);
			});
    };

    return(
        <div className="login-container">
            <h5>Login</h5>
            <form noValidate>
                <label htmlFor="email">Email Address</label>
                    <input type="email" 
                        id="email" 
                        name="email" 
                        autoComplete = "email"
                        autoFocus
                        onChange={handleChange}
                    /> <br />

                    <label htmlFor="password">Password</label>
                    <input type="password" 
                        id="password" 
                        name="password" 
                        autoComplete = "current-password"
                        onChange={handleChange}
                    /> <br />

                    <button type="submit" onClick={handleSubmit}>Sign-In</button>
            </form>
        </div>
    );

}