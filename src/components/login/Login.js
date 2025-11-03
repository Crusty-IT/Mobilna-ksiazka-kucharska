import React, {useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { authStates, withAuth } from "../auth";
import en from "../../utils/i18n";
import Loader from "../loader/Loader";
import { signIn } from "../../utils/firebase";
import { validateEmailPassword } from "../../utils/helpers";
import "./Login.css";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "100%",
        },
    },
}));

const Login = (props) => {
    const classes = useStyles();
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");
    const [values, setValues] = useState({ email: "", password: "" });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        name == "email"
            ? setValues({ email: value, password: values.password })
            : setValues({ email: values.email, password: value });

        setError(error);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const errorMsg = validateEmailPassword(values.email, values.password);

        if (errorMsg) {
            setError(errorMsg);
            return;
        }

        signIn(values.email, values.password)
            .then(() => {
                console.log("Signed In");
            })
            .catch((e) => {
                console.log("Error signing in", e);
                setError("Nieprawidłowy adres e-mail/hasło");
            });
    };

    if (props.authState === authStates.INITIAL_VALUE) {
        return <Loader />;
    }

    if (props.authState === authStates.LOGGED_IN) {
        return <Redirect to="/"></Redirect>;
    }

    const errorMsg = error;
    return (
        <div className="login-wrapper">
            <Container maxWidth="sm" className="login-container">
                <div className="login-header">
                    <h1 className="login-title">Zaloguj się</h1>
                    <p className="login-subtitle">Witaj ponownie! Zaloguj się do swojego konta</p>
                </div>
                <Card className="login-card">
                    <form className={classes.root} noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleInputChange}
                                    name="email"
                                    type="email"
                                    value={values.email}
                                    id="email-input"
                                    label="Adres e-mail"
                                    variant="outlined"
                                    fullWidth
                                    className="login-input"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={handleInputChange}
                                    name="password"
                                    type="password"
                                    value={values.password}
                                    id="password-input"
                                    label="Hasło"
                                    variant="outlined"
                                    fullWidth
                                    className="login-input"
                                />
                            </Grid>
                            {error && (
                                <Grid item xs={12}>
                                    <div className="login-error">
                                        <p>{error}</p>
                                    </div>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <Button
                                    onClick={handleSubmit}
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className="login-button"
                                >
                                    Zaloguj
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="login-footer">
                                    <p className="login-footer-text">{en.FORM_FIELDS.LOGIN_ALT_TEXT}</p>
                                    <Link to="/rejestracja" className="login-register-link">
                                        Zarejestruj się
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </Card>
            </Container>
        </div>
    );
};
export default withAuth(Login);