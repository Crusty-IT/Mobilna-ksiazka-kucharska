import React from "react";
import { getGroats } from "../../Api";
import GenericHowList from "./GenericHowList";

const Groats = () => {
    return (
        <GenericHowList
            title="Wybierz kaszę"
            fetchFn={getGroats}
            baseUrl="/funkcje/jak/kasze"
        />
    );
};

export default Groats;