import React from "react";
import { getVarious } from "../../Api";
import GenericSingleItem from "./GenericSingleItem";

const SingleVarious = () => {
    return <GenericSingleItem fetchFn={getVarious} />;
};

export default SingleVarious;