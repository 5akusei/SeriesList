import React from "react";

function SeriesItem(props) {
    return (
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { SeriesItem };