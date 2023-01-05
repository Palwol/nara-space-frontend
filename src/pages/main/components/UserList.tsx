import List from '@/components/List';
import ListHeader from '@/components/ListHeader';
import { CategoryType, sortCategories } from '@/constants/sort';
import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/store/store';
import { sortData } from '@/utils/sort';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const NAME_WIDTH = 80;

export default function UserList() {
  const usersData = useAppSelector((state: RootState) => state.users.changedData);
  const [orderedData, setOrderedData] = useState(usersData);
  const [categoryItem, setCategoryItem] = useState<CategoryType>(sortCategories[0]);

  useEffect(() => {
    setOrderedData(sortData(categoryItem, usersData));
  }, [categoryItem, usersData]);

  return (
    <Container>
      <ListHeader nameWidth={NAME_WIDTH} categoryItem={categoryItem} setCategoryItem={setCategoryItem} />
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
