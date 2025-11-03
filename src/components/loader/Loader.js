import React from "react";

import "./Loader.css";

export default function Loader() {
    return (
        <div className="loader-wrapper">
            <div className="loader-container">
                <div className="loader-spinner">
                    <div className="loader-circle"></div>
                    <div className="loader-circle loader-circle-2"></div>
                    <div className="loader-circle loader-circle-3"></div>
                </div>
                <p className="loader-text">Ładowanie...</p>
            </div>
        </div>
    );
}