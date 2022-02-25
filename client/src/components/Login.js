import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import {
    FormControl,
    Box,
    Container,
    Button,
    TextField
} from '@mui/material';

import Auth from "../utils/auth"
import "../styles/Login.css";


export default function Login() {
    const navigate = useNavigate();

    const [userFormData, setUserFormData] = useState({
        email: "",
        password: ""
    });

    const [loginUser, { error }] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setUserFormData({ ...userFormData, [name]: value });
    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await loginUser({
                variables: { ...userFormData },
            });

            Auth.login(data.loginUser.token);
            let urlEncoded = new URLSearchParams(data)
            navigate("/dashboard", { state: urlEncoded })

        } catch (e) {
            console.error(e);
        }

        setUserFormData({
            email: "",
            password: "",
        });
    };
    return <>
        <Box className="loginCont container" style={{ maxWidth: 450 }}>
            <Container >
                <h1 className="loginTitle">Login to your account</h1>
                <Box
                    component="form"
                    className="form login"
                    style={{ maxWidth: 450 }}
                    onSubmit={handleFormSubmit}
                >
                    <FormControl style={{ marginBottom: "1em", marginTop: "1em" }}>
                        <TextField
                            color="secondary"
                            label="Email Address"
                            name="email"
                            type="email"
                            defaultValue={userFormData.email}
                            onChange={handleInputChange}
                            focused
                            required />
                    </FormControl>

                    <FormControl style={{ marginBottom: "1em", marginTop: "1em" }} >
                        <TextField
                            color="secondary"
                            label="Password"
                            name="password"
                            type="password"
                            defaultValue={userFormData.password}
                            onChange={handleInputChange}
                            focused
                            required />
                    </FormControl>


                    <Button
                        disabled={
                            !(
                                userFormData.email &&
                                userFormData.password
                            )
                        }
                        className="btn-primary" type="submit"
                        sx={{ color: "white", marginBottom: "1em" }}>Login</Button>
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
