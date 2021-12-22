import React from 'react';

import { CardConteiner } from './style';
// import logo from '../../assets/images/photosnap.svg';

interface CardType {
  data: {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  };
}

export const Card = ({ data }: CardType): JSX.Element => {
  console.log(data);

  return (
    <CardConteiner>
      <img src={data.logo} alt="logo" />
      <h1>{data.company}</h1>

      <div className="new">
        <h2>New!</h2>
      </div>

      <div className="featured">
        <h2>Featured</h2>
      </div>

      <div>
        <p>{data.postedAt}</p>
        <p>{data.contract}</p>
        <p>{data.location}</p>
      </div>
    </CardConteiner>
  );
};
