import axios from 'axios';
import { useEffect, useState } from 'react';

//'MM-DD-YYYY'
const getFormattedDate = () => {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear().toString();

    return `${month}-${day}-${year}`;
};

export function useCurrencyPricePromise(currencies) {
    const [results, setResults] = useState([]);
  
    const fetchData = async () => {
      const dataCotacao = getFormattedDate();
  
      const promises = currencies.map(async (currency) => {
        if (!currency || !currency.currency) {
          return null;
        }
  
        const moeda = currency.currency;
        const apiUrl = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${moeda}'&@dataCotacao='${dataCotacao}'`;
  
        try {
          const response = await axios.get(apiUrl);
          const size = response.data.value.length;
          const latestValue = response.data.value[size - 1];
          const resultMap = {
            currency: moeda,
            cotacaoCompra: latestValue.cotacaoCompra,
            cotacaoVenda: latestValue.cotacaoVenda
          };
  
          return resultMap;
        } catch (err) {
          console.error(`Erro ao buscar dados para ${currency}:`, err);
          return null;
        }
      });
  
      // Aguarda todas as promessas serem resolvidas
      const resolvedResults = await Promise.all(promises.filter(Boolean));
      setResults(resolvedResults);
    };
  
    useEffect(() => {
        // Chama fetchData apenas no momento do carregamento
        fetchData();
      }, []);
  
    return results;
  }


export function useCurrencyPriceFromPromise(moeda) {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(true);
    const promise = useCurrencyPricePromise(moeda);
    const currentTime = getFormattedDate();
    
    useEffect(() => {
        async function fetch() {
            try {
                setLoading(true);
                const response = await promise;
                setResult(response);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetch();
    }, [currentTime]);

    return [loading, result];
}
