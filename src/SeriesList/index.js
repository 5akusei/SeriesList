import React from "react";
import './SeriesList.css';

function SeriesList(props) {
    return (
        <section className="SeriesList">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { SeriesList }