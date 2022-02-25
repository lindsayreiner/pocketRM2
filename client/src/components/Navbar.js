import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pocketRMLogo from "../images/pocketrm-logo.png";
import Button from '@mui/material/Button';
import Auth from '../utils/auth.js'

import "normalize.css";
import "../styles/Navbar.css";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let location = useLocation();

    // logout feature
    const logout = () => {
        try {

            const expired = Auth.loggedIn();

            if (!expired) {
                return false;
            }

            setIsLoggedIn(expired);
        } catch (err) {
            console.error(err);
        }
        window.localStorage.clear();
        window.location.href = "/login";
    };
    return <>
        <nav className="navbar">
            <Link to="/">
                <img
                    className="navLogo"
                    src={pocketRMLogo}
                    alt="PocketRM Logo"
                    height="40px"
                />
            </Link>
            <Link to="/dashboard">
                <Button
                    id="dashboard-btn"
                    className="btn-primary"
                    variant="contained">Dashboard
                </Button></Link>


            {location.pathname !== "/login" ? (
                location.pathname !== "/" ? (
                    location.pathname !== "/register" ? (
                        location.pathname !== "/dashboard" ? (
                            location.pathname !== "/profile" ? (
                                isLoggedIn ? (
                                    <>
                                        <Link to="/">
                                            <Button
                                                id="logout-button"
                                                className="btn-primary"
                                                onClick={logout}
                                                variant="contained">
                                                Logout
                                            </Button></Link>
                                    </>
                                ) : (
                                    <div className="acctBtns">
                                        <Link to="/login">
                                            <Button
                                                id="login-button"
                                                className="btn-primary"
                                                variant="contained">
                                                Login
                                            </Button></Link>
                                        <Link to="/register">
                                            {" "}
                                            <Button
                                                id="register-button"
                                                className="btn-primary"
                                                variant="contained">
                                                Sign up
                                            </Button>
                                        </Link>
                                    </div>
                                )
                            ) : (
                                <>
                                    {" "}
                                    <Link to="/">
                                        <Button
                                            id="logout-button"
                                            className="btn-primary"
                                            onClick={logout}
                                            variant="contained">
                                            Logout
                                        </Button></Link>
                                </>
                            )
                        ) : (
                            <>
                                {" "}
                                <Link to="/"><Button id="logout-button" className="btn-primary" onClick={logout} variant="contained">
                                    Logout
                                </Button></Link>
                            </>
                        )
                    ) : (
                        <> </>
                    )
                ) : (
                    <div className="acctBtns">
                        <Link to="/login">
                            <Button
                                id="login-button"
                                className="btn-primary"
                                variant="contained">
                                Login
                            </Button></Link>
                        <Link to="/register">
                            {" "}
                            <Button id="register-button" className="btn-primary" variant="contained">
                                Sign up
                            </Button>
                        </Link>
                    </div>
                )
            ) : (
                <> </>
            )}
        </nav>
    </>;
}
