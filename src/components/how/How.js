import React from "react";
import { Link } from "react-router-dom";
import "./How.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { authStates, withAuth } from "../auth";
import Loader from "../loader/Loader";
import { Redirect } from "react-router-dom";

const How = (props) => {
    if (props.authState === authStates.INITIAL_VALUE) {
        return <Loader />;
    }
    if (props.authState === authStates.LOGGED_OUT) {
        return <Redirect to="/logowanie"></Redirect>;
    }

    return (
        <>
            <div className="how-container">
                <div className="how-header">
                    <h1 className="how-title">Co zamierzasz ugotować?</h1>
                </div>
                <Container className="how-cards-container" maxWidth="md">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <div className="how-card">
                                <Link to="/funkcje/jak/warzywa" className="how-card-link">
                                    <div className="how-card-image-wrapper">
                                        <img
                                            className="how-card-image"
                                            src="https://images.unsplash.com/photo-1557844352-761f2565b576?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnZXRhYmxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                                            alt="Warzywa"
                                        />
                                        <div className="how-card-overlay"></div>
                                    </div>
                                    <div className="how-card-content">
                                        <h3 className="how-card-title">Warzywa</h3>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className="how-card">
                                <Link to="/funkcje/jak/makarony" className="how-card-link">
                                    <div className="how-card-image-wrapper">
                                        <img
                                            className="how-card-image"
                                            src="https://images.unsplash.com/photo-1612966874574-e0a92ad2bc43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fHBhc3RhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                                            alt="Makarony"
                                        />
                                        <div className="how-card-overlay"></div>
                                    </div>
                                    <div className="how-card-content">
                                        <h3 className="how-card-title">Makarony</h3>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className="how-card">
                                <Link to="/funkcje/jak/kasze" className="how-card-link">
                                    <div className="how-card-image-wrapper">
                                        <img
                                            className="how-card-image"
                                            src="https://images.unsplash.com/photo-1437252611977-07f74518abd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhcmxleSUyMGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                                            alt="Kasze"
                                        />
                                        <div className="how-card-overlay"></div>
                                    </div>
                                    <div className="how-card-content">
                                        <h3 className="how-card-title">Kasze</h3>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <div className="how-card">
                                <Link to="/funkcje/jak/inne" className="how-card-link">
                                    <div className="how-card-image-wrapper">
                                        <img
                                            className="how-card-image"
                                            src="https://images.unsplash.com/photo-1504283165217-3679a64511fd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGVnZ3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                                            alt="Inne"
                                        />
                                        <div className="how-card-overlay"></div>
                                    </div>
                                    <div className="how-card-content">
                                        <h3 className="how-card-title">Inne</h3>
                                    </div>
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );

};
export default withAuth(How);