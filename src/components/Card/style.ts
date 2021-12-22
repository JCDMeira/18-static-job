import styled from 'styled-components';

interface CardConteinerProps {
  isNew: boolean;
}

export const CardConteiner = styled.div<CardConteinerProps>`
  width: 87.2vw;
  height: 25.8rem;

  background: var(--white);
  border-radius: 5px;
  border-left: 5px solid var(--desaturated-dark-cyan);
  box-shadow: 0px 6px 12px rgba(123, 142, 142, 0.25);
  margin-bottom: 3.9rem;
  padding: 3.8rem 2.4rem;
  position: relative;

  .logo {
    width: 4.8rem;
    position: absolute;
    top: -2.4rem;
    left: 1.9rem;
  }
`;
