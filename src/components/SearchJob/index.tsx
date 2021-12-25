/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import * as S from './style';

import iconX from '../../assets/images/icon-remove.svg';

interface SearchJobInterface {
  currentFilters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchJob = ({
  currentFilters,
  setFilters,
}: SearchJobInterface): JSX.Element => {
  // - Functions
  const handleRemove = (filter: string) => {
    const newFilters = currentFilters.filter((value) => {
      return value !== filter;
    });
    setFilters(newFilters);
  };

  const handleReset = () => {
    setFilters([]);
  };

  return (
    <S.SearchJob>
      <div className="myTags">
        {currentFilters.map((filter, index) => {
          return (
            <div className="tag" key={index}>
              <span>{filter}</span>
              <button
                className="remove"
                value={filter}
                onClick={() => handleRemove(filter)}
              >
                <img src={iconX} alt="remove tag" />
              </button>
            </div>
          );
        })}
      </div>
      {/* <input type="text" name="job" id="job" placeholder="Search your job" /> */}
      <button className="clear" onClick={() => handleReset()}>
        Clear
      </button>
    </S.SearchJob>
  );
};
