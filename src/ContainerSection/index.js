import React from "react";
import './ContainerSection.css';

function ContainerSection(props) {
    return (
        <div className="col-12 col-md-6 ContainerSection">
            {props.children}
        </div>
    );
}

export { ContainerSection };