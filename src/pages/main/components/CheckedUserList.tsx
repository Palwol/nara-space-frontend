import ListHeader from '@/components/ListHeader';
import styled, { css } from 'styled-components';

export default function CheckedUserList() {
  return (
    <Container>
      <ListHeader />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 490px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        width: 100%;
        height: 100%;
      }
    `;
  }}
`;
