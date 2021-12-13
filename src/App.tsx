import React from 'react';

import { Conteiner, GlobalStyle } from './Global';
import { Card } from './components/Card';

import mobileBackground from './assets/images/bg-header-mobile.svg';
import desktopBackground from './assets/images/bg-header-desktop.svg';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <div className="background">
          <img className="mobile" src={mobileBackground} alt="background" />
          <img className="desktop" src={desktopBackground} alt="background" />
        </div>
        <div className="content">
          <div className="search"></div>
          <Card />
        </div>
      </Conteiner>
    </>
  );
}

export default App;
