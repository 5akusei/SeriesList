import React from 'react';
import { SeriesCounter } from '../SeriesCounter';
import { SeriesSearch } from '../SeriesSearch';
import { SeriesList } from '../SeriesList';
import { SeriesItem } from '../SeriesItem';
import { ContainerSection } from '../ContainerSection';
import { CardComponent } from '../CardComponent';
import { SeriesInput } from '../SeriesInput';
import { GenericWrapper } from '../GenericWrapper';
import { AddSerieButton } from '../AddSerieButton';

function AppUI({
    totalSeries,    
    completedSeries,
    searchValue,
    setSearchValue,
    searchedSeries,
    completeSerie,
    deleteSerie,
}) {
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

export {AppUI};