import React from 'react';
import { SeriesCounter } from './SeriesCounter';
import { SeriesSearch } from './SeriesSearch';
import { SeriesList } from './SeriesList';
import { SeriesItem } from './SeriesItem';
import { ContainerSection } from './ContainerSection';
import { GenericWrapper } from './GenericWrapper';
import { AddSerieButton } from './AddSerieButton';
// import { CreateSerieButton } from './CreateSerieButton';
// import './App.css';
import './SeriesInput.css';
import './CardComponent.css';

const series = [
  {titulo: 'Kimetsu no Yaiba', completed: false},
  {titulo: 'Naruto', completed: true},
  {titulo: 'Bleach', completed: false}
]

const url_img = "https://media.istockphoto.com/vectors/tiny-people-reading-books-in-online-library-vector-id1227213224?k=20&m=1227213224&s=170667a&w=0&h=KI4exDvy6qVk9P--TyAIjf4rNZcRNlijWkMAQLe3TyE=";

function App() {
  return (
    <React.Fragment>
      <ContainerSection>
        <div class="card CardComponent">
          <div class="card-body">
            <h5 class="card-title">Add a New Serie</h5>
            <div class="form-group SeriesInput">
              <label for="inputSerieName">Serie Name</label>
              <input type="text" class="form-control" id="inputSerieName" placeholder="Locke & Key" />
            </div>
            <AddSerieButton />
          </div>
          <img class="card-img-top" src={url_img} alt="Card" />
        </div>
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
