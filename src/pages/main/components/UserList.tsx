import List from '@/components/List';
import ListHeader from '@/components/ListHeader';
import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const NAME_WIDTH = 80;

export default function UserList() {
  const usersData = useAppSelector((state: RootState) => state.users.changedData);
  const [orderedData, setOrderedData] = useState(usersData);

  useEffect(() => {
    setOrderedData(usersData);
  }, [usersData]);

  return (
    <Container>
      <ListHeader nameWidth={NAME_WIDTH} />
      <ListContainer>
        <List data={orderedData} nameWidth={NAME_WIDTH} setCheckBox={true} />
      </ListContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 250px;
  height: 490px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        width: 100%;
        height: 244px;
      }
    `;
  }}
`;

const ListContainer = styled.div`
  flex: 1;
  overflow-y: overlay;
`;
