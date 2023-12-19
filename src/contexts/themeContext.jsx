import { createContext } from 'react';
import { useTemplateVal } from '@dsplay/react-template-utils';

export const ThemeContext = createContext({
    globalTheme: {
        backgoundColor: '',
        backgoundNumberColor: '',
        textColor: '',
        numberColor: '',
    },
});

const ThemeContextParent = (props) => {
    const backgoundColor = useTemplateVal('backgoundColor') || '#161617';
    const backgoundNumberColor = useTemplateVal('backgoundNumberColor') || '#020101';
    const numberColor = useTemplateVal('numberColor') ||'#fff';
    const textColor = useTemplateVal('textColor') ||'#fff';
    
    const { children } = props;

    const value = {
        globalTheme: {
            backgoundColor: backgoundColor,
            backgoundNumberColor: backgoundNumberColor,
            textColor: textColor,
            numberColor: numberColor
        },
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextParent;
