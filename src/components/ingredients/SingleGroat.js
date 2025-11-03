import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGroats } from "../../Api";
import "./Single.css";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import How from "../how/How";
import { authStates, withAuth } from "../auth";
import Loader from "../loader/Loader";

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    section: {
        marginTop: theme.spacing(3),
    },
}));

const PageTitle = ({ children }) => (
    <Typography variant="h4" component="h1" gutterBottom>
        {children}
    </Typography>
);

const Section = ({ title, children }) => {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <Typography variant="h6" className="h6" gutterBottom>{title}</Typography>
            <Typography variant="body1" color="textSecondary">{children}</Typography>
        </div>
    );
};

const ExpandableSection = ({ title, children }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <div className={classes.section}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6">{title}</Typography>
                <IconButton
                    className={clsx(classes.expand, { [classes.expandOpen]: open })}
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label="pokaż więcej"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <CardContent style={{ paddingLeft: 0 }}>{children}</CardContent>
            </Collapse>
        </div>
    );
};

const GroatDetails = ({ item }) => (
    <Container maxWidth="sm">
        <Card className="description">
            <CardContent>
                <PageTitle>{item.name}</PageTitle>
                {item.image && (
                    <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "100%", maxWidth: 400, display: "block", margin: "0 auto 16px" }}
                    />
                )}
                <Section title="Sposób przygotowania">{item.description}</Section>
                <ExpandableSection title="Wartości zdrowotne">
                    <Typography paragraph>
                        Pod względem wartości odżywczej kasze przewyższają ryż, makaron i ziemniaki.
                        Są bogatym źródłem skrobi, która w organizmie rozkłada się powoli na glukozę
                        – paliwo potrzebne do pracy mózgu i wszystkich innych komórek.
                        100 g ugotowanej kaszy manny pokrywa niemal całkowicie dzienne zapotrzebowanie na węglowodany.
                    </Typography>
                    <Typography paragraph>
                        W skład kasz wchodzą witaminy z grupy B: B1 (tiamina), B2 (ryboflawina), PP (niacyna),
                        B6 (pirydoksyna), kwas foliowy i witamina E. Sporo jest również składników mineralnych,
                        głównie potasu obniżającego ciśnienie, żelaza zapobiegającego niedokrwistości oraz magnezu
                        korzystnie działającego na układ nerwowy i pracę mięśni (w tym sercowego).
                        Kasze są też całkiem dobrym źródłem wapnia, miedzi, cynku, manganu i krzemu.
                    </Typography>
                    <Typography variant="h6" style={{ marginTop: 8 }}>Kaszę powinni jeść:</Typography>
                    <ul className="tips">
                        <li>nadciśnieniowcy i cierpiący na choroby serca i układu krążenia</li>
                        <li>osoby zagrożone anemią – np. kasza jaglana i gryczana zawierają żelazo, kwas foliowy i witaminę E</li>
                        <li>osoby żyjące w ciągłym napięciu – witaminy z grupy B łagodzą objawy stresu</li>
                        <li>diabetycy – kasze zawierają dużo skrobi, która łagodnie podnosi poziom glukozy i insuliny</li>
                        <li>dzieci, kobiety w ciąży i karmiące, osoby starsze, rekonwalescenci – kasze są lekko strawne</li>
                    </ul>
                </ExpandableSection>
            </CardContent>
        </Card>
    </Container>
);

const SingleGroat = (props) => {
    const { slug } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;
        (async () => {
            const list = await getGroats();
            const found = list.find((v) => v.number === parseInt(slug, 10));
            if (active) {
                setItem(found || null);
                setLoading(false);
            }
        })();
        return () => { active = false; };
    }, [slug]);

    if (props.authState === authStates.INITIAL_VALUE || loading) return <Loader />;
    if (!item) return <Container maxWidth="sm"><Typography variant="h6">Nie znaleziono</Typography></Container>;

    return (
        <div className="single-page">
            <How />
            <GroatDetails item={item} />
        </div>
    );
};

export default withAuth(SingleGroat);