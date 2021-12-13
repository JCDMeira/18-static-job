import React from 'react';
import { Conteiner, GlobalStyle } from './Global';

import mobileBackground from './assets/images/bg-header-mobile.svg';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <div className="background">
          <img className="mobile" src={mobileBackground} alt="background" />
        </div>
        <div className="content">
          <div className="search"></div>
        </div>
      </Conteiner>
    </>
  );
}

export default App;
