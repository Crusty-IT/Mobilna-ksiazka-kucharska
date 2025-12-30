import React from "react";
import { getGroats } from "../../Api";
import GenericSingleItem from "./GenericSingleItem";
import Typography from "@material-ui/core/Typography";

const extraContent = (
    <>
        <Typography variant="h6" style={{ marginTop: 16 }}>Wartości zdrowotne</Typography>
        <Typography paragraph>
            Pod względem wartości odżywczej kasze przewyższają ryż, makaron i ziemniaki.
            Są bogatym źródłem skrobi, która w organizmie rozkłada się powoli na glukozę
            – paliwo potrzebne do pracy mózgu i wszystkich innych komórek.
        </Typography>
        <Typography paragraph>
            W skład kasz wchodzą witaminy z grupy B: B1 (tiamina), B2 (ryboflawina), PP (niacyna),
            B6 (pirydoksyna), kwas foliowy i witamina E. Sporo jest również składników mineralnych,
            głównie potasu, żelaza oraz magnezu.
        </Typography>
        <Typography variant="h6" style={{ marginTop: 8 }}>Kaszę powinni jeść:</Typography>
        <ul className="tips">
            <li>nadciśnieniowcy i cierpiący na choroby serca</li>
            <li>osoby zagrożone anemią</li>
            <li>osoby żyjące w ciągłym napięciu</li>
            <li>diabetycy</li>
            <li>dzieci, kobiety w ciąży i seniorzy</li>
        </ul>
    </>
);

const SingleGroat = () => {
    return <GenericSingleItem fetchFn={getGroats} extraContent={extraContent} />;
};

export default SingleGroat;