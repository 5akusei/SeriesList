import React from "react";

function ContainerSection(props) {
    return (
        <div className="container-fluid">
            {props.children}
        </div>
    );
}

export { ContainerSection };