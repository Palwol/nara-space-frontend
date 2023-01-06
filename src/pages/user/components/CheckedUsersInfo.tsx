import { UserData } from '@/api/api';
import List from '@/components/List';
import ListHeader from '@/components/ListHeader';
import { CategoryType, sortCategories } from '@/constants/sort';
import { useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/store/store';
import { sortData } from '@/utils/sort';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const NAME_WIDTH = 100;

export default function CheckedUsersInfo() {
  const usersData = useAppSelector((state: RootState) => state.users.changedData);
  const [orderedData, setOrderedData] = useState<UserData[]>(usersData);
  const [categoryItem, setCategoryItem] = useState<CategoryType>(sortCategories[0]);

  useEffect(() => {
    setOrderedData(sortData(categoryItem, usersData));
  }, [categoryItem, usersData]);

  return (
    <Container>
      <ListHeader
        nameWidth={NAME_WIDTH}
        categoryItem={categoryItem}
        setCategoryItem={setCategoryItem}
        infoList={true}
      />
      <ListContainer>
        <List data={orderedData.filter((el) => el.checked)} nameWidth={NAME_WIDTH} setCheckBox={false} />
      </ListContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 425px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        position: absolute;
        top: 403px;
        width: 353px;
        height: 254px;
        z-index: 5;
      }
    `;
  }}
`;

const ListContainer = styled.div`
  flex: 1;
  overflow-y: overlay;
`;
