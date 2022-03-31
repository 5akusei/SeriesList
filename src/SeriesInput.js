import React from "react";
import './SeriesInput.css';

function SeriesInput(props) {
    return (
        <div class="form-group SeriesInput">
            <label for="inputSerieName">Serie Name</label>
            <input type="text" class="form-control" id="inputSerieName" placeholder="Locke & Key" />
        </div>
    );
}

export { SeriesInput };