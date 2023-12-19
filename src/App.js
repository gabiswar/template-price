import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import TableContainer from './components/table/TableContainer';
import { useMedia, Loader, useScreenInfo } from '@dsplay/react-template-utils';
import Intro from './components/intro';
import { useCurrencyPricePromise } from './hooks/use-currency-price';

const MIN_LOADING_DURATION = 2800;

// fonts to preload
// @font-face's must be defined in fonts.sass or another in-use style file
const fonts = [
  'Roboto Condensed',
];

function App() {
  const { screenFormat } = useScreenInfo();
  let media = useMedia();
  const moedas = media.moedas;

  const firstLoad = useCurrencyPricePromise(moedas);
  
  return (
    <Loader
      placeholder={<Intro />}
      fonts={fonts}
      minDuration={MIN_LOADING_DURATION}
      tasks={[firstLoad]}
    >
      <div className={`app-container fade-in ${screenFormat}`}>
        <HeaderContainer></HeaderContainer>
        {moedas.map((data, index) => (
          <TableContainer 
            key={index} 
            currency={data.currency}
          ></TableContainer>
        ))}
      </div>

    </Loader>
  );
}

export default App;