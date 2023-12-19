import { createContext } from 'react';

export const ThemeContext = createContext({
    globalTheme: {
        backgoundColor: '',
        backgoundNumberColor: '',
        textColor: '',
        numberColor: '',
    },
});

const ThemeContextParent = (props) => {
    const backgoundColor = '#161617';
    const backgoundNumberColor = '#020101';
    const numberColor = '#fff';
    const textColor = '#fff';
    
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
