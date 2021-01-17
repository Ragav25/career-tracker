import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';

export const SignUp = () => {
    const history = useHistory();
    const initialFormData = Object.freeze({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
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
                .post(`user/register/`, {
                    first_name: formData.firstname,
                    last_name: formData.lastname,
                    email: formData.email,
                    user_name: formData.username,
                    password: formData.password
                })
                .then((res) => {
                    history.push('/login');
                    console.log(res);
                    console.log(res.data);
                })
                .catch(err => {
                    console.log("Error => ", err);
                });
    };

    return(
        <div>
            <h2>Sign Up</h2>

            <form noValidate>
                <label htmlFor="firstname">First Name</label>
                <input type="text" 
                    id="firstname" 
                    name="firstname" 
                    autoComplete = "firstname"
                    onChange={handleChange}
                /> <br />

                <label htmlFor="lastname">Last Name</label>
                <input type="text" 
                    id="lastname" 
                    name="lastname" 
                    autoComplete = "lastname"
                    onChange={handleChange}
                /> <br />

                <label htmlFor="username">User Name</label>
                <input type="text" 
                    id="username" 
                    name="username" 
                    autoComplete = "username"
                    onChange={handleChange}
                /> <br />

                <label htmlFor="email">Email Address</label>
                <input type="email" 
                    id="email" 
                    name="email" 
                    autoComplete = "email"
                    onChange={handleChange}
                /> <br />

                <label htmlFor="password">Password</label>
                <input type="password" 
                    id="password" 
                    name="password" 
                    autoComplete = "current-password"
                    onChange={handleChange}
                /> <br />

                <button type="submit" onClick={handleSubmit}>Sign-Up</button>

            </form>
        </div>
    );

}