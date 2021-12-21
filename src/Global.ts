import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --desaturated-dark-cyan: #5BA4A4;
    --light-grayish-cyan: #EFFAFA;
    --grayish-cyan: #EEF6F6;
    --dark-grayish-cyan: #7B8E8E;
    --very-dark-grayish-cyan: #2C3A3A;
    --white: #fff;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    font-family: Spartan;
  }
`;

export const Conteiner = styled.div`
  background: var(--desaturated-dark-cyan);
  width: 100%;
  height: 317.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .background {
    width: 100%;
    height: 15.6rem;

    .mobile {
      height: 100%;
    }
    .desktop {
      display: none;
    }
  }

  .content {
    padding-top: 5.5rem;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--light-grayish-cyan);
    position: relative;
  }
`;
