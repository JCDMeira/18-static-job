/* eslint-disable no-unused-vars */
import React from 'react';

import * as S from './style';

interface CardType {
  currentFilters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
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

export const Card = ({
  data,
  setFilters,
  currentFilters,
}: CardType): JSX.Element => {
  const onclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = (e.target as HTMLInputElement).value;

    const canAdd = currentFilters.some((data) => data === result);

    if (!canAdd) {
      const resultString = [...currentFilters, result];
      setFilters(resultString);
    }
  };

  const handleAdd = (tag: string) => {
    const canAdd = currentFilters.some((data) => data === tag);

    if (!canAdd) {
      const resultString = [...currentFilters, tag];
      setFilters(resultString);
    }
  };

  return (
    <S.CardConteiner isNew={data.new} isFeatured={data.featured}>
      <img className="logo" src={data.logo} alt={`${data.company} logo`} />

      <div className="desktopPosition">
        <div className="info">
          <h1 className="company">{data.company}</h1>

          <div className="new" onClick={() => handleAdd('New')}>
            <h2>New!</h2>
          </div>

          <div className="featured" onClick={() => handleAdd('Featured')}>
            <h2>Featured</h2>
          </div>
        </div>

        <h1 className="position">{data.position}</h1>

        <div className="infoJob">
          <p>{data.postedAt}</p>
          <p className="dot">.</p>
          <p>{data.contract}</p>
          <p className="dot">.</p>
          <p>{data.location}</p>
        </div>
      </div>
      <div className="tagsContent">
        {data.role && (
          <S.filterTag
            value={data.role}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onclick(e)}
          >
            {data.role}
          </S.filterTag>
        )}
        {data.level && (
          <S.filterTag
            value={data.level}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onclick(e)}
          >
            {data.level}
          </S.filterTag>
        )}
        {data.languages.map((language, index) => (
          <S.filterTag
            key={index}
            value={language}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onclick(e)}
          >
            {language}
          </S.filterTag>
        ))}
        {data.tools.map((tool, index) => (
          <S.filterTag
            key={index}
            value={tool}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onclick(e)}
          >
            {tool}
          </S.filterTag>
        ))}
      </div>
    </S.CardConteiner>
  );
};
