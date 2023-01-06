import { UserData } from '@/api/api';
import List from '@/components/List';
import ListHeader from '@/components/ListHeader';
import { CategoryType, sortCategories } from '@/constants/sort';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { RootState } from '@/store/store';
import { updateUsersThunk } from '@/store/users-actions';
import { sortData } from '@/utils/sort';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const NAME_WIDTH = 100;

export default function CheckedUserList() {
  const usersData = useAppSelector((state: RootState) => state.users.changedData);
  const dispatch = useAppDispatch();
  const [orderedData, setOrderedData] = useState<UserData[]>(usersData);
  const [categoryItem, setCategoryItem] = useState<CategoryType>(sortCategories[0]);

  const handleButtonClick = () => {
    dispatch(updateUsersThunk(usersData));
  };

  useEffect(() => {
    setOrderedData(sortData(categoryItem, usersData));
  }, [categoryItem, usersData]);

  return (
    <Container>
      <ListHeader nameWidth={NAME_WIDTH} categoryItem={categoryItem} setCategoryItem={setCategoryItem} />
      <ListContainer>
        <List data={orderedData.filter((el) => el.checked)} nameWidth={NAME_WIDTH} setCheckBox={false} />
      </ListContainer>
      <Button onClick={handleButtonClick}>저장하기</Button>
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
        width: 353px;
        height: 304px;
      }
    `;
  }}
`;

const ListContainer = styled.div`
  flex: 1;
  overflow-y: overlay;
`;

const Button = styled.button`
  width: 210px;
  height: 35px;
  margin: 25px 20px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 3px;
`;
