import styled from 'styled-components';

export const userWrapper = styled.div``;

export const usersContainer = styled.ul`
  column-count: 2;
  column-gap: 50px;
  padding-top: 20px;
`;
export const usersNote = styled.div`
  margin-top: 20px;
  font-size: 25px;
  line-height: 24px;
`;
export const userLogin = styled.div`
  font-size: 18px;
  line-height: 24px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
