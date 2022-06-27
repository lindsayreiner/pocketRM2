import React from 'react'
import {
    FormControl,
    Box,
    Container,
    Button,
    TextField,
    Divider
} from '@mui/material';

import "../styles/Connections.css"
import CreateConnection from "./Modals/CreateConnection.js"

export default function Connections() {
    return (
        <>
            <Box className="contactList">
                <Container className="searchCont">
                    <FormControl
                        variant="standard"
                        className="search-contacts"
                        style={{
                            // maxWidth: 350,
                            padding: '1em'
                        }}>
                        <TextField
                            id="filled-search"
                            className="searchField"
                            label="Search connections"
                            type="search"
                            variant="filled"
                            color="secondary"
                        />


                    </FormControl>
                    <Button className="btn-primary connectionSearchBtn" type="submit" sx={{ color: "white" }}>Search</Button>
                    <CreateConnection />

                    <Divider />

                    <Container className="contactList">
                        <ul className="contactListUl">
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Aaron Fernandez</Button></li>
                        </ul>
                    </Container>
                </Container>
            </Box>
        </>
    )
}
