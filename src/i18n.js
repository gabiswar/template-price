import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ptBR from 'date-fns/locale/pt-BR';
import enUS from 'date-fns/locale/en-US';
import fr from 'date-fns/locale/fr';
import es from 'date-fns/locale/es';
import de from 'date-fns/locale/de';
import nl from 'date-fns/locale/nl';
import it from 'date-fns/locale/it';

i18n
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          locale: enUS,
          Compra: 'Purchase',
          Venda: 'Sale'
        },
      },
      pt: {
        translations: {
          locale: ptBR,
          Compra: 'Compra',
          Venda: 'Venda'
        },
      },
      fr: {
        translations: {
          locale: fr,
          Compra: 'Achat',
          Venda: 'Vente'
        },
      },
      de: {
        translations: {
          locale: de,
          Compra: 'Kauf',
          Venda: 'Verkauf'
        },
      },
      es: {
        translations: {
          locale: es,
          Compra: 'Compra',
          Venda: 'Venta'
        },
      },
      it: {
        translations: {
          locale: it,
          Compra: 'Acquisto',
          Venda: 'Vendita'
        },
      },
      nl: {
        translations: {
          locale: nl,
          Compra: 'Aankoop',
          Venda: 'Verkoop'
        },
      },
    },
    
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  });

export default i18n;
