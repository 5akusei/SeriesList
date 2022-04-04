import React from "react";
import { SerieContext } from "../SerieContext";
import './AddSerieButton.css';


function AddSerieButton(props) {
    const { addSerie, serieInfo } = React.useContext(SerieContext);
    
    const addNewSerie = () => {
        addSerie(serieInfo);
        document.getElementById('inputSerieName').value = "";
    };
    
    return (
        <button 
            className="btn AddSerieButton"
            onClick={addNewSerie}
        >
            Add serie
        </button>
    );
}

export { AddSerieButton };