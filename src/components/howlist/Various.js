import React from "react";
import { getVarious } from "../../Api";
import GenericHowList from "./GenericHowList";

const Various = () => {
    return (
        <GenericHowList
            title="Inne produkty"
            fetchFn={getVarious}
            baseUrl="/funkcje/jak/inne"
        />
    );
};

export default Various;