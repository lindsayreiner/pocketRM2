import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import {
    FormControl,
    Box,
    Container,
    Button,
    TextField
} from '@mui/material';

import "../styles/Login.css";
import Auth from "../utils/auth"

export default function Login() {

    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const navigate = useNavigate();


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const login = async (req, res) => {
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        console.log('Im inside the login variable------------------------------');

        if (email && password) {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            })
            if (response.ok) {
                console.log('Logged in successfully!');
            } else {
                console.log("There was an error logging in Please try again.")
            }
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await login({
                variables: { ...userFormData },
            });

            console.log(data);
            Auth.login(data.login.token);
            navigate("/dashboard")
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            email: '',
            password: '',
        });
    };


    return <>
        <Box className="loginCont container" style={{ maxWidth: 450 }}>
            <Container >
                <h1 className="loginTitle">Login to your account</h1>
                <Box component="form"
                    className="form login"
                    style={{ maxWidth: 450 }}
                    validated={validated}
                    onSubmit={handleFormSubmit}
                >
                    <FormControl style={{ marginBottom: "1em", marginTop: "1em" }}>
                        <TextField
                            color="secondary"
                            label="Email Address"
                            type="email"
                            onChange={handleInputChange}
                            focused
                            required />
                    </FormControl>

                    <FormControl style={{ marginBottom: "1em", marginTop: "1em" }} >
                        <TextField
                            color="secondary"
                            label="Password"
                            type="password"
                            onChange={handleInputChange}
                            focused
                            required />
                    </FormControl>


                    <Button className="btn-primary" type="submit" sx={{ color: "white", marginBottom: "1em" }}>Login</Button>
                </Box>

                <div className="redirect">
                    New to PocketRM?
                    <Link to="/register" id="sign-up-link">
                        <b>Sign Up</b>
                    </Link>
                </div>
            </Container>
        </Box >

    </>;
}
