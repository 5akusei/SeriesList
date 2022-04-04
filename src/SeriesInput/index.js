import React from "react";
import { SerieContext } from "../SerieContext";
import './SeriesInput.css';

function SeriesInput(props) {
    const [inputText, setInputText] = React.useState('');
    const { setSerieInfo } = React.useContext(SerieContext);
    
    const onChange = (event) => {
        setInputText(event.target.value);
        setSerieInfo(inputText);
    };

    return (
        <div className="form-group SeriesInput">
            <label htmlFor="inputSerieName">Serie Name</label>
            <input 
                id="inputSerieName" 
                type="text" 
                className="form-control" 
                placeholder="Locke & Key" 
                onChange={onChange}
            />
        </div>
    );
}

export { SeriesInput };