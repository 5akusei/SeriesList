import React, { useState } from "react";
import {useLocalStorage} from './useLocalStorage';

const SerieContext = React.createContext();

function SerieProvider(props) {
    const {
      item:series,
      saveItem:saveSeries,
      loading,
      error
    } = useLocalStorage('SERIES_V1', []);

    const [searchValue, setSearchValue] = useState('');
    const [modalStatus, setModalStatus] = useState(false);
    const [serieInfo, setSerieInfo] = useState('');
  
    const totalSeries = series.length;
    const completedSeries = series.filter(serie => !!serie.completed).length;
  
    let searchedSeries = [];
  
    if (!searchValue.length >= 1) {
      searchedSeries = series;
    } else {
      searchedSeries = series.filter(
        serie => {
          const serieTitle = serie.title.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return serieTitle.includes(searchText);
        }
      );
    }
    
    const addSerie = (title) => {
      const newSeriesList = [...series];
      newSeriesList.push({title:title, completed:false});
      saveSeries(newSeriesList);
    }

    const completeSerie = (title) => {
      const serieIndex = series.findIndex( serie => serie.title === title);
      const newSeriesList = [...series];
      newSeriesList[serieIndex].completed = !newSeriesList[serieIndex].completed; 
      saveSeries(newSeriesList);
    }
  
    const deleteSerie = (title) => {
      const serieIndex = series.findIndex( serie => serie.title === title);
      const newSeriesList = [...series];
      newSeriesList.splice(serieIndex, 1);
      saveSeries(newSeriesList);
      
      // Another way to delete
      // const newSeriesList = series.filter(todo=>todo.text !== text)
      // saveSeries(newSeriesList);
    }
    return (
        <SerieContext.Provider value={{
            loading,
            error,
            totalSeries,
            completedSeries,
            searchValue,
            setSearchValue,
            searchedSeries,
            addSerie,
            completeSerie,
            deleteSerie,
            modalStatus,
            setModalStatus,
            serieInfo,
            setSerieInfo,
        }}>
            {props.children}
        </SerieContext.Provider>
    );
}

export {SerieContext, SerieProvider};