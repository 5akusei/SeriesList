import React from "react";
import './AddSerieButton.css';


function AddSerieButton(props) {
    const addSerie = () => {
        console.log("Se agrego una serie");
        alert("Se agrego una serie"); // TODO: hacer modal
    };
    
    return (
        <button 
            className="btn AddSerieButton"
            onClick={addSerie}
        >
            Add serie
        </button>
    );
}

export { AddSerieButton };