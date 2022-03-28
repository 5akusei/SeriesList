import React from "react";
import './SeriesItem.css'

function SeriesItem(props) {
    return (
        <li className="SeriesItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                {props.completed 
                    ? <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    : <i class="fa fa-circle-o" aria-hidden="true"></i>
                }
            </span>
            <p className={`SeriesItem-p ${props.completed && 'SeriesItem-p--complete'}`}>{props.text}</p>
            <span className="Icon Icon-delete">X</span>
        </li>
    );
}

export { SeriesItem };