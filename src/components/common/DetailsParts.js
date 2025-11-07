import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

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

export const PageTitle = ({ children }) => (
    <Typography variant="h4" component="h1" gutterBottom>
        {children}
    </Typography>
);

export const Section = ({ title, children }) => {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <Typography variant="h6" className="h6" gutterBottom>{title}</Typography>
            <Typography variant="body1" color="textSecondary">{children}</Typography>
        </div>
    );
};

export const ExpandableSection = ({ title, children }) => {
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
