import React, { useState } from 'react';
import { AppUI } from './AppUI';
// import './App.css';

const defaultSeries = [
  {title: 'Kimetsu no Yaiba', completed: true},
  {title: 'Naruto', completed: false},
  {title: 'Bleach', completed: true}
]

function App() {
  const [series, setSeries] = useState(defaultSeries);
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

  const completeSerie = (title) => {
    const serieIndex = series.findIndex( serie => serie.title === title);
    const newSeriesList = [...series];
    newSeriesList[serieIndex].completed = !newSeriesList[serieIndex].completed; 
    setSeries(newSeriesList);
  }

  const deleteSerie = (title) => {
    const serieIndex = series.findIndex( serie => serie.title === title);
    const newSeriesList = [...series];
    newSeriesList.splice(serieIndex, 1);
    setSeries(newSeriesList);
    
    // Another way to delete
    // const newSeriesList = series.filter(todo=>todo.text !== text)
    // setSeries(newSeriesList);
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
