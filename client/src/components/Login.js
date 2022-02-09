import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import {
    FormControl,
    Box,
    Container,
    Button,
    TextField
} from '@mui/material';

import "../styles/Login.css";

export default function Login() {
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    };


    const navigate = useNavigate();

    return <>
        <Box className="loginCont container" style={{ maxWidth: 450 }}>
            <Container onSubmit={handleSubmit(onSubmit)} data-aos="fade-in">
                <h1 className="loginTitle">Login to your account</h1>
                <Box component="form"
                    className="form login"
                    style={{ maxWidth: 450 }}
                >
                    <FormControl style={{ marginBottom: "1em", marginTop: "1em" }}>
                        <TextField color="secondary" label="Email Address" focused />
                    </FormControl>

                    <FormControl style={{ marginBottom: "1em", marginTop: "1em" }} >
                        <TextField color="secondary" label="Password" type="password" focused />
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
