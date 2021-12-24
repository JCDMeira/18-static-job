/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { Conteiner, GlobalStyle } from './Global';
import { Card } from './components/Card';

import mobileBackground from './assets/images/bg-header-mobile.svg';
import desktopBackground from './assets/images/bg-header-desktop.svg';

import { default as data } from './data/data.json';
import { SearchJob } from './components/SearchJob';

function App(): JSX.Element {
  // const [filters, setFilters] = useState<string[]>([]);
  const [filters, setFilters] = useState([]);

  const [allJobs, setAllJobs] = useState(
    data.map((job) => ({ ...job, canShow: true })),
  );

  interface dataType {
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
  }

  useEffect(() => {
    const filterTexts = filters.map((filter) => filter);

    const updatedJobs = allJobs.map((job) => {
      const textsToCompare = [
        job.role,
        job.level,
        ...job.languages,
        ...job.tools,
        job.new && 'New',
        job.featured && 'Featured',
      ];

      if (
        filterTexts.every((filterText) => textsToCompare.includes(filterText))
      ) {
        return { ...job, canShow: true };
      } else {
        return { ...job, canShow: false };
      }
    });

    setAllJobs(updatedJobs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

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
          {allJobs.map((value) => {
            return (
              value.canShow && (
                <Card key={value.id} data={value} setFilters={setFilters} />
              )
            );
          })}
        </div>
      </Conteiner>
    </>
  );
}

export default App;
