import React from "react";
import './SeriesCounter.css';

function SeriesCounter({totalSeries, completedSeries}) {
    return (
        <h2 className="SeriesCounter" >{`You have watched ${completedSeries} of ${totalSeries} series`}</h2>
    );
}

export { SeriesCounter };