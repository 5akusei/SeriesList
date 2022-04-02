import React from "react";
import './SeriesSearch.css'

function SeriesSearch({searchValue, setSearchValue}) {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <React.Fragment>
            <input 
                className="form-control SeriesSearch" placeholder='Gintama'
                onChange={onSearchValueChange}
                value={searchValue}
            />
            <i className="fa fa-filter Icon-filter" aria-hidden="true"></i>
        </React.Fragment>
    );
}

export { SeriesSearch };