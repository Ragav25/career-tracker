import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () =>{
    return(

        <div className="header">
            <nav className="top">
                <h4>It's a Top Nav</h4>

                <div className="links">
                    <NavLink
                        to="/register"
                        exact
                    >
                        Register
                    </NavLink>
                    <NavLink
                        to="/login"
                        exact
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/logout"
                        exact
                    >
                        Logout
                    </NavLink>
                </div>
            </nav>
        </div>

    );
}