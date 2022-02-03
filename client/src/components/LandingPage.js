import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import beachWoman from "../images/women-on-beach.jpg";

import "../styles/LandingPage.css";


export default function LandingPage() {
    return <>
        <Box>
            <Container className="hero container">
                <h2
                    className="slogan"
                    style={{
                        fontSize: "2.25em",
                        fontWeight: "normal",
                        color: "black",
                    }}
                >
                    Keep track of what matters.
                </h2>
                <a href="/register">
                    <Button className="getStartedBtn btn-primary" size="large" sx={{ color: "white" }}>
                        Get Started <FontAwesomeIcon icon="arrow-right" />
                    </Button>
                </a>
            </Container>
            <div
                style={{ padding: "6em 0em" }}
                className="landing-body"
                data-aos="fade-up"
            >
                <Stack direction="row" spacing={2} >
                    <Stack className="landingDetails" spacing={2}>
                        <div className="landing-text">
                            <h3 style={{ fontSize: "2em", fontWeight: "bold", marginBottom: '0.2em' }}>
                                Be the friend you want to have.
                            </h3>
                            <p style={{ fontSize: "1.33em" }}>
                                PocketRM remembers the important things, so you don't have to.
                                Never miss another birthday, anniversary, or important day for
                                the people in your life.
                            </p>
                        </div>
                        <div className="landing-text">
                            <h3 style={{ fontSize: "2em", fontWeight: "bold" }}>
                                Dating and Networking made easy.
                            </h3>
                            <p style={{ fontSize: "1.33em" }}>
                                Met a recruiter at a coffee shop? On so many dating apps you
                                can't keep track of all the fish in your sea? PocketRM stores
                                these connections in a way that makes it easy to keep track of
                                who is who.
                            </p>
                        </div>
                    </Stack>
                    <Stack>
                        <img className="friendsImg" src={beachWoman} alt="friends-on-beach" style={{ maxWidth: "100%", display: "block" }} />
                    </Stack>
                </Stack>

            </div>
        </Box>
    </>;
}

