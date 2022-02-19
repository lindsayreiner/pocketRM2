import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import {
    FormControl,
    Box,
    Container,
    Button,
    TextField,
    Alert
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





    return <div>
        <Container className="formCont container" style={{ maxWidth: 450 }}>
            <h1 className="regTitle">Register for PocketRM</h1>
            <Box
                component="form"
                className="form login"
                // onSubmit={handleFormSubmit}
                style={{ maxWidth: 450 }}
                noValidate
            // validated={validated}

            >
                {/* show alert if server response is bad */}
                <Alert
                    dismissible
                    // onClose={() => setShowAlert(false)}
                    // show={showAlert}
                    variant="danger"
                >
                    Something went wrong with your signup!
                </Alert>
                <FormControl style={{ marginTop: "1em" }}>
                    <TextField
                        color="secondary"
                        label="First Name"
                        type="text"
                        // value={userFormData.firstName}
                        // onChange={handleInputChange}
                        focused required />
                </FormControl>

                <FormControl>
                    <TextField
                        color="secondary"
                        label="Last Name"
                        type="text"
                        // value={userFormData.lastName}
                        // onChange={handleInputChange}
                        focused required />
                </FormControl>
                <FormControl>
                    <TextField
                        color="secondary"
                        label="Email Address" type="email"
                        // value={userFormData.email}
                        // onChange={handleInputChange}
                        focused required />
                </FormControl>

                <FormControl>
                    <TextField
                        color="secondary" label="Password"
                        type="password"
                        // value={userFormData.password}
                        // onChange={handleInputChange}
                        focused required />
                </FormControl>


                <Button
                    // disabled={
                    //     !(
                    //         userFormData.firstName &&
                    //         userFormData.lastName &&
                    //         userFormData.email &&
                    //         userFormData.password
                    //     )
                    // }
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
