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
    }
  }

  .position {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.7rem;

    margin-top: 1.3rem;

    color: var(--very-dark-grayish-cyan);
  }

  .infoJob {
    width: 28.1rem;
    padding-right: 7.1rem;
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

    p:nth-child(1)::after {
      content: '.';
      position: absolute;
      font-size: 2.6rem;
      bottom: 2.6rem;
      margin-left: 0.4rem;
    }
    p:nth-child(2)::after {
      content: '.';
      position: absolute;
      font-size: 2.6rem;
      bottom: 2.6rem;
      margin-left: 0.4rem;
    }
  }

  .tagsContent {
    margin-top: 1.7rem;
    padding-right: 2rem;
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
`;
