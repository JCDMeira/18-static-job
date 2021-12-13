import React from 'react';

import { CardConteiner } from './style';

export const Card = (keys: string): JSX.Element => {
  return (
    <CardConteiner key={keys}>
      <h1>card</h1>
    </CardConteiner>
  );
};
