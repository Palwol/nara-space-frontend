import styled, { css } from 'styled-components';

export default function CheckedUserList() {
  return <Container></Container>;
}

const Container = styled.div`
  width: 250px;
  height: 490px;
  background-color: ${({ theme }) => theme.colors.lightblue1};
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        height: 100%;
      }
    `;
  }}
`;
