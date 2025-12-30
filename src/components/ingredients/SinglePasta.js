import React from "react";
import { getPasta } from "../../Api";
import GenericSingleItem from "./GenericSingleItem";
import { ExpandableSection } from "../common/DetailsParts";

const extraContent = (item) => (
    <ExpandableSection
        title="Wskazówki"
        intro={item.values}
        tips={[
            "nie dodawaj oliwy do wody!",
            "makaron wrzucaj jedynie do wrzącej wody!",
            "sól dorzuć dopiero wówczas, kiedy woda zacznie wrzeć!",
            "nie gotuj makaronu na wolnym ogniu!",
            "nie łam suchego makaronu w krótsze nitki!",
            "aby dowiedzieć się, czy makaron się ugotował po prostu go ugryź i sprawdź!",
            "nie przepłukuj makaronu zimną wodą!",
            "nie zwlekaj z podawaniem!",
        ]}
    />
);

const SinglePasta = () => {
    return <GenericSingleItem fetchFn={getPasta} extraContent={extraContent} />;
};

export default SinglePasta;