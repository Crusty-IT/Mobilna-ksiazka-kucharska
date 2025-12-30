import React from "react";
import { getVegetables } from "../../Api";
import GenericSingleItem from "./GenericSingleItem";

const SingleVege = () => {
    return <GenericSingleItem fetchFn={getVegetables} />;
};

export default SingleVege;