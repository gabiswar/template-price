import React, { useContext } from 'react';
import { LoaderContext } from '@dsplay/react-template-utils';
import { ThemeContext } from '../../contexts/themeContext';
import { useCurrencyPriceFromPromise } from '../../hooks/use-currency-price';
import FlagMap from '../flags/FlagMap';

import './style.scss';

function TableContainer(props) {
  const { globalTheme } = useContext(ThemeContext);
  const loaderContext = useContext(LoaderContext);
  const { tasksResults: [initalInformation] } = loaderContext;
  
  let weBuy = 0.000;
  let weSell = 0.000;

  if (!initalInformation || (initalInformation && !initalInformation.length)) {
    weBuy = 0.000;
    weSell = 0.000;
  }
  // const [fetchingAllCurrency, allData = initalInformation] = useCurrencyPriceFromPromise([props.currency]);
  const currencyData = initalInformation.filter(data => data.currency === props.currency);
  if (currencyData && currencyData.length) {
    weBuy = currencyData[0].cotacaoCompra;
    weSell = currencyData[0].cotacaoVenda;
  }

  return (
    <div className="table-row" style={{ color: globalTheme.textColor }}>
      <div className="table-flag">
        <div className="flag-content">
          {props.currency}
        </div>
        <div className="flag-content">
          <div className="currency-image">
            <FlagMap sigla={props.currency} />
          </div>
        </div>
      </div>
      <div className="table-cell">
        <div className="legend">Compra</div>
        <div className="value" style={{ backgroundColor: globalTheme.backgoundNumberColor, color: globalTheme.numberColor }}>{weBuy}</div>
      </div>
      <div className="table-cell">
        <div className="legend">Venda</div>
        <div className="value" style={{ backgroundColor: globalTheme.backgoundNumberColor, color: globalTheme.numberColor }}>{weSell}</div>
      </div>
    </div>
  );
}

export default TableContainer;