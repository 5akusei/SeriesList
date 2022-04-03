import React from "react";
import { SerieContext } from "../SerieContext";
import './CreateSerieButton.css';

function CreateSerieButton() {
    const {modalStatus, setModalStatus} = React.useContext(SerieContext);

    const changeStatusModal = () => {
        setModalStatus(!modalStatus);
    };

    return (
        <button 
            className="CreateSerieButton" 
            onClick={changeStatusModal}
        >+</button>
    );
}

export { CreateSerieButton };