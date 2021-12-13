import React from 'react';

import { CardConteiner } from './style';

interface CardType {
  id: number;
}

export const Card = ({ id }: CardType): JSX.Element => {
  return (
    <CardConteiner>
      <h1>{id}</h1>
    </CardConteiner>
  );
};
