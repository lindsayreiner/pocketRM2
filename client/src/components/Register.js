import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import {
    FormControl,
    Box,
    Container,
    Button,
    TextField
} from '@mui/material';

import Auth from '../utils/auth';
import "../styles/Register.css";

export default function Register() {
    const navigate = useNavigate();

    // set initial form state
    const [userFormData, setUserFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [addUser, { error }] = useMutation(ADD_USER);

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

        console.log(userFormData);

        try {
            // execute addUser mutation and pass in variable data from form
            const { data } = await addUser({
                variables: { ...userFormData },
            });

            console.log(data);

            Auth.login(data.addUser.token);
            navigate("/dashboard")

        } catch (e) {
            console.error(e);
        }

        setUserFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        });
    };


    return <div>
        <Container className="formCont container" style={{ maxWidth: 450 }}>
            <h1 className="regTitle">Register for PocketRM</h1>
            <Box
                component="form"
                className="form login"
                onSubmit={handleFormSubmit}
                style={{ maxWidth: 450 }}
            >
                <FormControl style={{ marginTop: "1em" }}>
                    <TextField
                        color="secondary"
                        label="First Name"
                        name="firstName"
                        type="text"
                        defaultValue={userFormData.firstName}
                        onChange={handleInputChange}
                        focused required />
                </FormControl>
                <FormControl>
                    <TextField
                        color="secondary"
                        label="Last Name"
                        name="lastName"
                        type="text"
                        defaultValue={userFormData.lastName}
                        onChange={handleInputChange}
                        focused required />
                </FormControl>
                <FormControl>
                    <TextField
                        color="secondary"
                        label="Email Address"
                        name="email"
                        type="email"
                        defaultValue={userFormData.email}
                        onChange={handleInputChange}
                        focused required />
                </FormControl>

                <FormControl>
                    <TextField
                        color="secondary" label="Password"
                        name="password"
                        type="password"
                        defaultValue={userFormData.password}
                        onChange={handleInputChange}
                        focused required />
                </FormControl>


                <Button
                    disabled={
                        !(
                            userFormData.firstName &&
                            userFormData.lastName &&
                            userFormData.email &&
                            userFormData.password
                        )
                    }
                    className="btn-primary" type="submit"
                    sx={{ color: "white" }}>
                    Submit</Button>

                <div style={{ marginTop: "1em" }} className="redirect">
                    Already have an account?
                    <Link to="/login" id="login-link" >
                        <b>Log in</b>
                    </Link>
                </div>
            </Box>
        </Container>


    </div>;
}
