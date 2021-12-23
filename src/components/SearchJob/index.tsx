import React from 'react';

import * as S from './style';

// interface SearchJobInterface {}

export const SearchJob = (): JSX.Element => {
  return (
    <S.SearchJob>
      <input type="text" name="job" id="job" placeholder="Search your job" />
    </S.SearchJob>
  );
};
