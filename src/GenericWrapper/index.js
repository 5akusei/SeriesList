import React from "react";
import './GenericWrapper.css';

function GenericWrapper(props) {
    return (
        <div className="GenericWrapper">
            {props.children}
        </div>
    );
}

export { GenericWrapper };