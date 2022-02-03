import React from "react";
import { Link } from "react-router-dom";
import pocketRMLogo from "../images/pocketrm-logo.png";
import Button from '@mui/material/Button';

import "normalize.css";
import "../styles/Navbar.css";

export default function Navbar() {
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


            <div className="acctBtns">

                <Link to="/login"><Button id="login-button" className="btn-primary" variant="contained">
                    Login
                </Button></Link>
                <Link to="/register"> <Button id="register-button" className="btn-primary" variant="contained">
                    Sign up
                </Button></Link>
            </div>
        </nav>
    </>;
}
