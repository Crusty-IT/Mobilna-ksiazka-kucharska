import React from "react";
import { getVegetables } from "../../Api";
import GenericHowList from "./GenericHowList";

const Vegetables = () => {
    return (
        <GenericHowList
            title="Wybierz warzywo"
            fetchFn={getVegetables}
            baseUrl="/funkcje/jak/warzywa"
        />
    );
};

export default Vegetables;