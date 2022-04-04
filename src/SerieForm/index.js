import React from "react";
import { SerieContext } from "../SerieContext";
import './SerieForm.css';

function SerieForm(props) {
    const [newSerieValue, setNewSerieValue] = React.useState('');
    const {addSerie, setModalStatus} = React.useContext(SerieContext);

    const onCancel = () => {
        setModalStatus(false);
    };

    const onChange = (event) => {
        setNewSerieValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setModalStatus(false);
        addSerie(newSerieValue)
    };

    return (
        <form onSubmit={onSubmit} >
            <div class="form-group">
                <label htmlFor="SerieTitle">Add a serie that you want watch later</label>
                <input 
                    type="text" 
                    id="SerieTitle" 
                    className="form-control" 
                    placeholder="Add a serie" 
                    onChange={onChange}
                    value={newSerieValue}
                />
                <small id="emailHelp" class="form-text text-muted">Type at least one letter.</small>
            </div>
            <div className="SerieForm-buttonContainer">
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick = {onCancel}
                >Cancelar</button>

                <button
                    className="btn btn-outline-primary"
                    type= "submit"
                >Agregar</button>
            </div>
        </form>
    );
}

export { SerieForm };