import React from "react";
import './SeriesSearch.css'

function SeriesSearch(props) {
    return (
        <React.Fragment>
            <input className="form-control SeriesSearch" placeholder='Gintama' />
            <i class="fa fa-filter Icon-filter" aria-hidden="true"></i>
        </React.Fragment>
    );
}

export { SeriesSearch };