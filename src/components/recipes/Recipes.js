import React from 'react';
import {Link} from "react-router-dom";
import "./Recipes.css";


const Recipes = (props) => {


    return (
        <>
            {props.recipes && props.recipes.length > 0 && (
                <div className="recipes-results-wrapper">
                    <div className="recipes-results-header">
                        <h3 className="recipes-results-title">Znalezione przepisy</h3>
                        <p className="recipes-results-count">
                            Znaleziono {props.recipes.length} {props.recipes.length === 1 ? 'przepis' : props.recipes.length < 5 ? 'przepisy' : 'przepisów'}
                        </p>
                    </div>

                    <div className="recipes-results-grid">
                        {props.recipes.map((data, index) => (
                            <Link
                                key={index}
                                to={"/funkcje/znajdz/przepisy/" + data.number}
                                className="recipes-result-card-link"
                            >
                                <div className="recipes-result-card">
                                    <div className="recipes-result-number">{index + 1}</div>
                                    <div className="recipes-result-content">
                                        <h4 className="recipes-result-name">{data.name}</h4>
                                        <div className="recipes-result-arrow">→</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Recipes