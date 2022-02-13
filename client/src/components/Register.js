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

import "../styles/Register.css";

export default function Register() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return <div>
        <Container className="formCont container" style={{ maxWidth: 450 }}>
            <h1 className="regTitle">Register for PocketRM</h1>
            <Box component="form" className="form login" onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 450 }}>
                <FormControl style={{ marginTop: "1em" }}>
                    <TextField color="secondary" label="First Name" type="text" focused required />
                </FormControl>

                <FormControl>
                    <TextField color="secondary" label="Last Name" type="text" focused required />
                </FormControl>
                <FormControl>
                    <TextField color="secondary" label="Email Address" type="email" focused required />
                </FormControl>

                <FormControl>
                    <TextField color="secondary" label="Password" type="password" focused required />
                </FormControl>


                <Button className="btn-primary" type="submit" sx={{ color: "white" }}>Submit</Button>

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
