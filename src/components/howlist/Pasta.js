import React from "react";
import { getPasta } from "../../Api";
import GenericHowList from "./GenericHowList";

const Pasta = () => {
    return (
        <GenericHowList
            title="Wybierz makaron"
            fetchFn={getPasta}
            baseUrl="/funkcje/jak/makarony"
        />
    );
};

export default Pasta;