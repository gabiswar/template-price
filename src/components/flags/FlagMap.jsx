// FlagMap.jsx
import React from 'react';
import './style.scss';
import flagUSD from '../flags/images/flagUSD.png';
import flagAUD from '../flags/images/flagAUD.png';
import flagCAD from '../flags/images/flagCAD.png';
import flagDKK from '../flags/images/flagDKK.png';
import flagEUR from '../flags/images/flagEUR.png';
import flagJPY from '../flags/images/flagJPY.png';
import flagNOK from '../flags/images/flagNOK.png';
import flagSEK from '../flags/images/flagSEK.png';
import flagCHF from '../flags/images/flagCHF.png';
import flagGBP from '../flags/images/flagGBP.png';

function FlagMap(props) {
    const sigla = props.sigla;
  
    const flagImage = {
      USD: flagUSD, //Dólar dos Estados Unidos
      AUD: flagAUD, //Dólar australiano
      CAD: flagCAD, //Dólar canadense
      DKK: flagDKK, //Coroa dinamarquesa
      EUR: flagEUR, //Euro
      JPY: flagJPY, //Iene - japan
      NOK: flagNOK, //Coroa norueguesa
      SEK: flagSEK, //Coroa sueca
      CHF: flagCHF, //Franco suíço 
      GBP: flagGBP, //Libra Esterlina
    };
    
    const src = flagImage[sigla] ? flagImage[sigla] : flagUSD //para retornar uma imagem default caso não encontre
    return <img src={src} alt={`Bandeira ${sigla}`} />;
}

export default FlagMap;