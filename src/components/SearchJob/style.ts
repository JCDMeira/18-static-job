import styled from 'styled-components';

export const SearchJob = styled.div`
  width: 87.73333333333333vw;
  max-width: 111.2rem;
  min-height: 6rem;
  position: relative;
  background: white;
  margin-top: -9.2rem;
  margin-bottom: 3.3rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 0px 2px rgba(230, 230, 230, 0.8);
  display: flex;
  align-items: center;

  input {
    border: none;
    width: 100%;
    height: 100%;
  }
  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  .myTags {
    max-width: 90%;
    display: flex;
    flex-wrap: wrap;
  }

  .tag {
    height: 3.2rem;
    display: flex;
    align-items: center;
    margin: 0.8rem;
    background: var(--grayish-cyan);
    border-radius: 5px;

    span {
      font-weight: bold;
      font-size: 1.3rem;
      line-height: 1.5rem;
      margin-right: 0.7rem;
      padding: 10px 7px;

      color: var(--desaturated-dark-cyan);
    }

    .remove {
      height: 100%;
      width: 3.2rem;
      background: var(--desaturated-dark-cyan);
      border-radius: 0px 5px 5px 0px;
      border: none;
      cursor: pointer;

      &:hover {
        background: var(--very-dark-grayish-cyan);
      }
    }
  }

  .clear {
    border: none;
    background: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.3rem;
    line-height: 1.5rem;
    position: absolute;
    right: 20px;

    color: var(--dark-grayish-cyan);

    &:hover {
      color: var(--desaturated-dark-cyan);
      text-decoration: underline;
    }
  }

  @media (min-width: 1024px) {
    padding-left: 3.5rem;
  }
`;
