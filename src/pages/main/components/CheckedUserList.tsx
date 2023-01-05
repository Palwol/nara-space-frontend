import List from '@/components/List';
import ListHeader from '@/components/ListHeader';
import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const NAME_WIDTH = 100;

export default function CheckedUserList() {
  const usersData = useAppSelector((state: RootState) => state.users.changedData);
  const [orderedData, setOrderedData] = useState(usersData);

  useEffect(() => {
    setOrderedData(usersData);
  }, [usersData]);

  return (
    <Container>
      <ListHeader nameWidth={NAME_WIDTH} />
      <ListContainer>
        <List data={orderedData.filter((el) => el.checked)} nameWidth={NAME_WIDTH} setCheckBox={false} />
      </ListContainer>
      <Button>저장하기</Button>
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
        height: 304px;
      }
    `;
  }}
`;

const ListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Button = styled.button`
  width: 210px;
  height: 35px;
  margin: 25px 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 3px;
`;
