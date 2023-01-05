import Header from '@/components/Header';
import styled, { css } from 'styled-components';
import CheckedUserList from './components/CheckedUserList';
import UserList from './components/UserList';
import Arrow from '@/assets/images/arrow.svg';
import { useEffect, useState } from 'react';
import theme from '@/styles/theme';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { initChangedUsers } from '@/store/users-slice';

export default function Main() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const dispatch = useAppDispatch();

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    return () => {
      dispatch(initChangedUsers());
    };
  }, [dispatch]);

  return (
    <Container>
      <Header pathname="/" />
      <UserListContainer>
        <UserList />
        {windowSize > theme.size.mobile ? (
          <Arrow width="56" height="37" transform="rotate(0)" />
        ) : (
          <Arrow width="16" height="22" transform="rotate(90)" />
        )}
        <CheckedUserList />
      </UserListContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const UserListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 47px;
  width: 100%;
  height: 100%;
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        flex-direction: column;
        gap: 10px;
        padding: 20px 20px 30px 20px;
      }
    `;
  }}
`;
