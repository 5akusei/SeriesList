import React from 'react';
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

const series = [
  {titulo: 'Kimetsu no Yaiba', completed: false},
  {titulo: 'Naruto', completed: true},
  {titulo: 'Bleach', completed: false}
]

function App() {
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
          <SeriesCounter />
          
          <SeriesSearch />

          <SeriesList>
            {series.map( serie => (
              <SeriesItem key={serie.titulo} text={serie.titulo} completed={serie.completed}/>
            ))}
          </SeriesList>
        </GenericWrapper>
      </ContainerSection>
    </React.Fragment>
  );
}

export default App;
