import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext';
import './style.scss';

function HeaderContainer(props) {
  const { globalTheme } = useContext(ThemeContext);
  
  return (
    <div className="main-header">
      <div className="header">
        <p style={{color: globalTheme.textColor,  margin: '7px' }}>CÂMBIO | COTAÇÔES</p>
      </div>
    </div>
  );
}

export default HeaderContainer;
