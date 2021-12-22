/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';

import { Conteiner, GlobalStyle } from './Global';
import { Card } from './components/Card';

import mobileBackground from './assets/images/bg-header-mobile.svg';
import desktopBackground from './assets/images/bg-header-desktop.svg';

import { default as data } from './data/data.json';
import { SearchJob } from './components/SearchJob';

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
          <SearchJob />
          {data.map((value, index) => {
            return <Card key={index} data={value} />;
          })}
        </div>
      </Conteiner>
    </>
  );
}

export default App;
