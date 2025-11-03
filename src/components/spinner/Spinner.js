import React from 'react'
import './Spinner.css'

function Spinner() {
    return (
        <div className="spinner-wrapper">
            <div className="spinner-container">
                <div className="spinner-circle"></div>
                <div className="spinner-circle spinner-circle-2"></div>
                <div className="spinner-circle spinner-circle-3"></div>
                <p className="spinner-text">Ładowanie...</p>
            </div>
        </div>
    )
}

export default Spinner