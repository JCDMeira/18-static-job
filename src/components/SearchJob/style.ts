import styled from 'styled-components';

export const SearchJob = styled.div`
  width: 87.73333333333333vw;
  min-height: 6rem;
  position: relative;
  background: white;
  margin-top: -9.2rem;
  margin-bottom: 3.3rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 0px 2px rgba(230, 230, 230, 0.8);
  display: flex;
  align-items: center;
  padding: 10px;

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
`;
