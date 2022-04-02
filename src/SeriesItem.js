import React from "react";
import './SeriesItem.css'

function SeriesItem(props) {
    return (
        <li className="SeriesItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                {props.completed 
                    ? <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                    : <i className="fa fa-circle-o" aria-hidden="true"></i>
                }
            </span>
            <p className={`SeriesItem-p ${props.completed && 'SeriesItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export { SeriesItem };