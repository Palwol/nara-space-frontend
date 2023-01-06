import Header from '@/components/Header';
import UserInfo from '@/components/UserInfo';
import styled, { css } from 'styled-components';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/store/store';

export default function UserId() {
  const usersData = useAppSelector((state: RootState) => state.users.data);
  const { userId } = useParams();
  const user = usersData.find((el) => el.id === Number(userId));

  return (
    <Container>
      <Header pathname="/user" />
      <UserInfoContainer>{user && <UserInfo selectedUser={user} userDetail={true} />}</UserInfoContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 47px;
  width: 100%;
  flex: 1;
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        flex-direction: column;
        justify-content: flex-start;
        gap: 10px;
        padding: 20px 20px 30px 20px;
      }
    `;
  }}
`;
