import React, { useState } from "react";
import './SeriesSearch.css'

function SeriesSearch(props) {
    const [searchValue, setSearchValue] = useState('');

    const onSearchValueChange = (event) => {
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