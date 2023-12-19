import React, { useContext } from 'react';
import { LoaderContext } from '@dsplay/react-template-utils';
import { useCurrencyPriceFromPromise } from '../../hooks/use-currency-price';
import FlagMap from '../flags/FlagMap';

import './style.scss';

function TableContainer(props) {
  const loaderContext = useContext(LoaderContext);

  const { tasksResults: [initalInformation] } = loaderContext;
  if (!initalInformation || (initalInformation && !initalInformation.length)) {
    return <div className="table-row"></div>
  }

  // const [fetchingAllCurrency, allData = initalInformation] = useCurrencyPriceFromPromise([props.currency]);

  const currencyData = initalInformation.filter(data => data.currency === props.currency);
  const weBuy = currencyData[0].cotacaoCompra;
  const weSell = currencyData[0].cotacaoVenda;

  return (
    <div className="table-row">
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
        <div className="value">{weBuy}</div>
      </div>
      <div className="table-cell">
        <div className="legend">Venda</div>
        <div className="value">{weSell}</div>
      </div>    </div>
  );
}

export default TableContainer;