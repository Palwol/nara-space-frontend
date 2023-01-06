import { UserData } from '@/api/api';
import Header from '@/components/Header';
import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import CheckedUsersInfo from './components/CheckedUsersInfo';
import UserInfo from '../../components/UserInfo';

export default function User() {
  const usersData = useAppSelector((state: RootState) => state.users.data);
  const [data, setData] = useState<UserData[]>(usersData);
  const [selectedUser, setSelectedUser] = useState<UserData>(data[0]);

  useEffect(() => {
    if (!usersData.length) return;
    setData(usersData);
    setSelectedUser(usersData[0]);
  }, [usersData]);

  return (
    <Container>
      <Header pathname="/user" />
      <UserInfoContainer>
        <CheckedUsersInfo selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <UserInfo selectedUser={selectedUser} />
      </UserInfoContainer>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  flex: 1;
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        flex-direction: column-reverse;
        justify-content: flex-end;
        gap: 0px;
        padding: 20px 20px 40px 20px;
      }
    `;
  }}
`;
