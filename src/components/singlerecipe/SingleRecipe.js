import React, { useEffect, useState } from "react";
import { getRecipes } from "../../Api";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { authStates, withAuth } from "../auth";
import Loader from "../loader/Loader";
import "./SingleRecipe.css";

const SingleRecipe = (props) => {
    const [recipes, setRecipes] = useState([]);
    let slug = parseInt(props.match.params.slug);

    useEffect(() => {
        async function fetchData() {
            let result = await getRecipes();
            setRecipes(result);
        }

        fetchData();
        return () => {};
    }, []);
    if (props.authState === authStates.INITIAL_VALUE) {
        return <Loader />;
    }

    return (
        <div className="single-recipe-wrapper">
            {recipes
                .filter((recipe) => recipe.number === slug)
                .map((recipe) => {
                    return (
                        <Container key={recipe.number} maxWidth={"md"} className="single-recipe-container">
                            <Card className="single-recipe-card">
                                <div className="single-recipe-header">
                                    <h1 className="single-recipe-title">{recipe.name}</h1>
                                </div>
                                <div className="single-recipe-content">
                                    <div className="single-recipe-section">
                                        <div className="single-recipe-section-header">
                                            <span className="single-recipe-icon">🥘</span>
                                            <h2 className="single-recipe-section-title">Składniki</h2>
                                        </div>
                                        <ul className="single-recipe-ingredients">
                                            {recipe.composition.map((ingredient, index) => (
                                                <li key={index} className="single-recipe-ingredient-item">
                                                    <span className="single-recipe-ingredient-bullet">•</span>
                                                    {ingredient}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="single-recipe-section">
                                        <div className="single-recipe-section-header">
                                            <span className="single-recipe-icon">👨‍🍳</span>
                                            <h2 className="single-recipe-section-title">Sposób przygotowania</h2>
                                        </div>
                                        <div className="single-recipe-description">
                                            {recipe.description}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Container>
                    );
                })}
        </div>
    );
};

export default withAuth(SingleRecipe);