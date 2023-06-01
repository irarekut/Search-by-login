import styled from 'styled-components';

export const userWrapper = styled.div`
  height: 110vh;
  width: 150vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(53 79 119 / 41%);
`;

export const usersContainer = styled.div`
  height: 500px;
  width: 400px;
  border-radius: 20px;
  background-color: rgb(132 179 255);
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const userAvatar = styled.img`
  width: 150px;
  height: 150px;
`;
export const userLogin = styled.h2``;
export const userUrl = styled.a`
  color: black;
  font-size: 18px;
  line-height: 24px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
