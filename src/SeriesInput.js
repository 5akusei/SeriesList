import React from "react";
import './SeriesInput.css';

function SeriesInput(props) {
    return (
        <div className="form-group SeriesInput">
            <label htmlFor="inputSerieName">Serie Name</label>
            <input type="text" className="form-control" id="inputSerieName" placeholder="Locke & Key" />
        </div>
    );
}

export { SeriesInput };