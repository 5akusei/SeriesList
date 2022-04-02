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
              <SeriesItem 
                key={serie.title} 
                text={serie.title} 
                completed={serie.completed}
                onComplete={()=>{completeSerie(serie.title)}}
                onDelete={()=>{deleteSerie(serie.title)}}
              />
            ))}
          </SeriesList>
        </GenericWrapper>
      </ContainerSection>
    </React.Fragment>
  );
}

export default App;
