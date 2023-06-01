import styled from 'styled-components';

export const searchInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  width: 355px;
  height: 32px;
  &::placeholder {
    background-color: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.003em;
    color: #8099c2;
  }
`;
