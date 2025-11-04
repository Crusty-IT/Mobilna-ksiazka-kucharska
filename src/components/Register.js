import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Card, Typography, Box } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import { authStates, withAuth } from "./auth";
import { createNewUser } from "../utils/firebase";
import Loader from "./loader/Loader";
import { validateEmailPassword } from "../utils/helpers";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    card: {
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: 16,
        boxShadow: "0 8px 32px 0 rgba(102, 126, 234, 0.37)",
        padding: theme.spacing(4),
    },
    header: {
        color: "white",
        fontWeight: 700,
        marginBottom: theme.spacing(1),
        textAlign: "center",
    },
    subheader: {
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "center",
        marginBottom: theme.spacing(3),
    },
    textField: {
        width: "100%",
        "& .MuiOutlinedInput-root": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 8,
            "& fieldset": {
                borderColor: "#a78bfa",
            },
            "&:hover fieldset": {
                borderColor: "#8b5cf6",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#7c3aed",
            },
        },
        "& .MuiInputLabel-root": {
            color: "#6366f1",
            "&.Mui-focused": {
                color: "#7c3aed",
            },
        },
    },
    button: {
        background: "linear-gradient(45deg, #4f46e5 30%, #7c3aed 90%)",
        borderRadius: 8,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 15px 2px rgba(79, 70, 229, .3)",
        fontWeight: 600,
        textTransform: "none",
        fontSize: "1rem",
        width: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
            background: "linear-gradient(45deg, #4338ca 30%, #6d28d9 90%)",
            transform: "translateY(-2px)",
            boxShadow: "0 5px 20px 2px rgba(79, 70, 229, .4)",
        },
    },
    errorBox: {
        backgroundColor: "#fee2e2",
        border: "1px solid #fca5a5",
        borderRadius: 8,
        padding: theme.spacing(2),
        color: "#dc2626",
    },
}));

const Register = ({ authState }) => {
    const classes = useStyles();
    const [error, setError] = useState("");
    const [values, setValues] = useState({ email: "", password: "" });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (error) setError("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const errorMsg = validateEmailPassword(values.email, values.password);

        if (errorMsg) {
            setError(errorMsg);
            return;
        }

        try {
            await createNewUser(values.email, values.password);
            console.log("Zarejestrowano pomyślnie!");
        } catch (e) {
            console.error("Błąd podczas rejestracji:", e);
            if (e.code === "auth/email-already-in-use") {
                setError("Adres e-mail jest już w użyciu");
            } else {
                setError("Wystąpił błąd podczas rejestracji. Spróbuj ponownie.");
            }
        }
    };


    if (authState === authStates.INITIAL_VALUE) {
        return <Loader />;
    }

    if (authState === authStates.LOGGED_IN) {
        return <Redirect to="/" />;
    }

    return (
        <Container maxWidth="sm" className={classes.container}>
            <Card className={classes.card} elevation={0}>
                <Box mb={3}>
                    <Typography variant="h4" component="h1" className={classes.header}>
                        Rejestracja
                    </Typography>
                    <Typography variant="body2" className={classes.subheader}>
                        Utwórz nowe konto
                    </Typography>
                </Box>

                <form onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.textField}
                                onChange={handleInputChange}
                                name="email"
                                type="email"
                                value={values.email}
                                label="Adres e-mail"
                                variant="outlined"
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                className={classes.textField}
                                onChange={handleInputChange}
                                name="password"
                                type="password"
                                value={values.password}
                                label="Hasło"
                                variant="outlined"
                                required
                            />
                        </Grid>

                        {error && (
                            <Grid item xs={12}>
                                <Box className={classes.errorBox}>
                                    <Typography variant="body2">{error}</Typography>
                                </Box>
                            </Grid>
                        )}

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                className={classes.button}
                            >
                                Zarejestruj się
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Card>
        </Container>
    );
};

export default withAuth(Register);