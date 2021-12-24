/* eslint-disable no-unused-vars */
import React from 'react';

import { CardConteiner } from './style';
// import logo from '../../assets/images/photosnap.svg';

interface CardType {
  setFilters: React.Dispatch<React.SetStateAction<never[]>>;
  data: {
    canShow: boolean;
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
  const onclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = e.target as HTMLInputElement;
    console.log(result.value);
  };

  return (
    <CardConteiner isNew={data.new} isFeatured={data.featured}>
      <img className="logo" src={data.logo} alt={`${data.company} logo`} />

      <div className="info">
        <h1 className="company">{data.company}</h1>

        <div className="new">
          <h2>New!</h2>
        </div>

        <div className="featured">
          <h2>Featured</h2>
        </div>
      </div>

      <h1 className="position">{data.position}</h1>

      <div className="infoJob">
        <p>{data.postedAt}</p>
        <p>{data.contract}</p>
        <p>{data.location}</p>
      </div>

      <div>
        {data.role && (
          <button
            value={data.role}
            className="filterTag"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onclick(e)}
          >
            {data.role}
          </button>
        )}
        {data.level && <div className="filterTag">{data.level}</div>}
        {data.languages.map((language, index) => (
          <div key={index} className="filterTag">
            {language}
          </div>
        ))}
        {data.tools.map((tool, index) => (
          <div key={index} className="filterTag">
            {tool}
          </div>
        ))}
      </div>
    </CardConteiner>
  );
};
