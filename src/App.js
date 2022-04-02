import React, { useState } from 'react';
import { SeriesCounter } from './SeriesCounter';
import { SeriesSearch } from './SeriesSearch';
import { SeriesList } from './SeriesList';
import { SeriesItem } from './SeriesItem';
import { ContainerSection } from './ContainerSection';
import { CardComponent } from './CardComponent';
import { SeriesInput } from './SeriesInput';
import { GenericWrapper } from './GenericWrapper';
import { AddSerieButton } from './AddSerieButton';
// import { CreateSerieButton } from './CreateSerieButton';
// import './App.css';

const defaultSeries = [
  {titulo: 'Kimetsu no Yaiba', completed: true},
  {titulo: 'Naruto', completed: false},
  {titulo: 'Bleach', completed: true}
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
        const serieTitle = serie.titulo.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return serieTitle.includes(searchText);
      }
    );
  }


  return (
    <React.Fragment>
      <ContainerSection>
        <CardComponent>
          <SeriesInput />
          <AddSerieButton />
        </CardComponent>
      </ContainerSection>

      <ContainerSection>
        <GenericWrapper>
          <SeriesCounter
            totalSeries={totalSeries}
            completedSeries={completedSeries}
          />
          
          <SeriesSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <SeriesList>
            {searchedSeries.map( serie => (
              <SeriesItem key={serie.titulo} text={serie.titulo} completed={serie.completed}/>
            ))}
          </SeriesList>
        </GenericWrapper>
      </ContainerSection>
    </React.Fragment>
  );
}

export default App;
