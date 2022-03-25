import React from 'react';
import { SeriesCounter } from './SeriesCounter';
import { SeriesSearch } from './SeriesSearch';
import { SeriesList } from './SeriesList';
import { SeriesItem } from './SeriesItem';
import { CreateSerieButton } from './CreateSerieButton';
// import './App.css';

const series = [
  {titulo: 'Kimetsu no Yaiba', completed: false},
  {titulo: 'Naruto', completed: false},
  {titulo: 'Bleach', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <SeriesCounter />
      
      <SeriesSearch />

      <SeriesList>
        {series.map( serie => (
          <SeriesItem key={serie.titulo} text={serie.titulo} />
        ))}
      </SeriesList>

      <CreateSerieButton />
    </React.Fragment>
  );
}

export default App;
