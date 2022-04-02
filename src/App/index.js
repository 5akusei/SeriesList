import React, { useState } from 'react';
import { AppUI } from './AppUI';
// import './App.css';

// const defaultSeries = [
//   {title: 'Kimetsu no Yaiba', completed: true},
//   {title: 'Naruto', completed: false},
//   {title: 'Bleach', completed: true}
// ]

function App() {
  const localStorageSeries = localStorage.getItem('SERIES_V1');
  let parsedSeries;

  if (localStorageSeries) {
    parsedSeries = JSON.parse(localStorageSeries);
  } else {
    localStorage.setItem('SERIES_V1', JSON.stringify([]));
    parsedSeries = [];
  }

  const [series, setSeries] = useState(parsedSeries);
  const [searchValue, setSearchValue] = useState('');

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

  const saveSerie = (newSeriesList) => {
    localStorage.setItem('SERIES_V1', JSON.stringify(newSeriesList));
    setSeries(newSeriesList);
  };

  const completeSerie = (title) => {
    const serieIndex = series.findIndex( serie => serie.title === title);
    const newSeriesList = [...series];
    newSeriesList[serieIndex].completed = !newSeriesList[serieIndex].completed; 
    saveSerie(newSeriesList);
  }

  const deleteSerie = (title) => {
    const serieIndex = series.findIndex( serie => serie.title === title);
    const newSeriesList = [...series];
    newSeriesList.splice(serieIndex, 1);
    saveSerie(newSeriesList);
    
    // Another way to delete
    // const newSeriesList = series.filter(todo=>todo.text !== text)
    // saveSerie(newSeriesList);
  }

  return (
    <AppUI 
      totalSeries={totalSeries}
      completedSeries={completedSeries}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedSeries={searchedSeries}
      completeSerie={completeSerie}
      deleteSerie={deleteSerie}
    />
  );
}

export default App;
