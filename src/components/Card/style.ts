import styled from 'styled-components';

interface CardConteinerProps {
  isNew: boolean;
  isFeatured: boolean;
}

export const CardConteiner = styled.div<CardConteinerProps>`
  width: 87.2vw;
  height: 25.8rem;

  background: var(--white);
  border-radius: 5px;
  border-left: 5px solid var(--desaturated-dark-cyan);
  box-shadow: 0px 6px 12px rgba(123, 142, 142, 0.25);
  margin-bottom: 3.9rem;
  padding: 3.2rem 1.9rem;
  position: relative;

  .logo {
    width: 4.8rem;
    position: absolute;
    top: -2.4rem;
    left: 1.9rem;
  }

  .info {
    display: flex;
    width: 23.1rem;
    align-items: center;

    .company {
      font-weight: bold;
      font-size: 1.3rem;
      line-height: 1.5rem;
      margin-right: 1.7rem;

      color: var(--desaturated-dark-cyan);
    }

    .new {
      width: 5.1rem;
      height: 2.4rem;
      background: var(--desaturated-dark-cyan);
      border-radius: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1.4rem;
      display: ${(props) => (props.isNew ? 'visible' : 'none')};

      h2 {
        color: var(--white);
        font-weight: bold;
        font-size: 1.1rem;
        line-height: 1.2rem;
        text-transform: uppercase;
      }

      &:hover {
        cursor: pointer;
      }
    }

    .featured {
      width: 7.9rem;
      height: 2.4rem;

      background: var(--very-dark-grayish-cyan);
      border-radius: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      display: ${(props) => (props.isFeatured ? 'visible' : 'none')};

      h2 {
        color: var(--white);
        font-weight: bold;
        font-size: 1.1rem;
        line-height: 1.2rem;
        text-transform: uppercase;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  .position {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.7rem;

    margin-top: 1.3rem;

    color: var(--very-dark-grayish-cyan);

    &:hover {
      cursor: pointer;
      color: var(--desaturated-dark-cyan);
    }
  }

  .infoJob {
    width: 28.1rem;
    padding-right: 5rem;
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: initial;

    margin-top: 1.6rem;
    border-bottom: 1px solid var(--dark-grayish-cyan);

    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.5rem;
    position: relative;

    color: var(--dark-grayish-cyan);

    .dot {
      font-size: 2.6rem;
      bottom: 0.7rem;
      position: relative;
    }
  }

  .tagsContent {
    margin-top: 1.7rem;
    padding-right: 2rem;
  }

  @media (min-width: 1024px) {
    max-width: 111.2rem;
    height: 15.4rem;
    display: flex;
    padding: 0rem 4.2rem 0 4.1rem;
    align-items: center;

    .logo {
      position: initial;
      width: 8.6rem;
      height: 8.6rem;
      margin-right: 2.5rem;
    }

    .info {
      .company {
        font-size: 1.4rem;
        line-height: auto;
      }
    }

    .position {
      font-size: 1.8rem;
      line-height: auto;
    }

    .infoJob {
      font-size: 1.4rem;
      border: none;
    }

    .tagsContent {
      position: absolute;
      right: 0;
    }
  }
`;

export const filterTag = styled.button`
  padding: 0.7rem;
  border: none;
  margin-right: 1.7rem;
  margin-bottom: 1.6rem;
  background: var(--grayish-cyan);
  border-radius: 5px;

  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.5rem;

  color: var(--desaturated-dark-cyan);

  &:hover {
    cursor: pointer;
    background: var(--desaturated-dark-cyan);
    color: var(--grayish-cyan);
  }
`;
