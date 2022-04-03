import React, { useState } from 'react';
import { AppUI } from './AppUI';
// import './App.css';

// const defaultSeries = [
//   {title: 'Kimetsu no Yaiba', completed: true},
//   {title: 'Naruto', completed: false},
//   {title: 'Bleach', completed: true}
// ]

// Custom hook for to get or set any item in localstorage.
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }
  
  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItemList) => {
    localStorage.setItem(itemName, JSON.stringify(newItemList));
    setItem(newItemList);
  };

  return [
    item,
    saveItem,
  ];
} // end custom hook

function App() {
  const [series, saveSeries] = useLocalStorage('SERIES_V1', []);
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
