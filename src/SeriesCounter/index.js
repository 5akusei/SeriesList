import React from "react";
import { SerieContext } from "../SerieContext";
import './SeriesCounter.css';

function SeriesCounter() {
    const {totalSeries, completedSeries} = React.useContext(SerieContext);
    return (
        <h2 className="SeriesCounter" >{`You have watched ${completedSeries} of ${totalSeries} series`}</h2>
    );
}

export { SeriesCounter };