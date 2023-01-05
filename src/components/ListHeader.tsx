import styled, { css } from 'styled-components';
import AngleBracket from '@/assets/images/angle-bracket.svg';
import { useState } from 'react';

type CategoryType = {
  name: string;
  state: string;
};

type CategoryItemProps = {
  isSelected: boolean;
};

const categories: CategoryType[] = [
  { name: '오름차 순', state: 'ascending' },
  { name: '내림차 순', state: 'descending' },
];

export default function ListHeader() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [categoryItem, setCategoryItem] = useState<CategoryType>(categories[0]);

  const handleSelectBoxClick = () => {
    setIsOpened((prev) => !prev);
  };

  const handleCategoryClick = (category: CategoryType) => {
    setCategoryItem(category);
    setIsOpened(false);
  };

  const handleBackgroundClick = () => {
    setIsOpened(false);
  };

  return (
    <Container>
      <SelectBox onClick={handleSelectBoxClick}>
        <span>{categoryItem.name}</span>
        <AngleBracket />
      </SelectBox>
      {isOpened && (
        <CategoryList>
          {categories.map((category) => (
            <CategoryItem
              key={category.state}
              onClick={() => handleCategoryClick(category)}
              isSelected={category.name === categoryItem.name}
            >
              {category.name}
            </CategoryItem>
          ))}
        </CategoryList>
      )}
      <TitleContainer>
        <span>이름</span>
        <span>생년월일</span>
      </TitleContainer>
      {isOpened && <Dimmer onClick={handleBackgroundClick} />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 93px;
  padding: 20px 20px 10px 20px;
  background-color: ${({ theme }) => theme.colors.lightblue1};
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        height: 49px;
        padding: 15px 20px;
      }
    `;
  }}
`;

const SelectBox = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 82px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  ${({ theme }) => theme.fonts.body};
  z-index: 10;
  cursor: pointer;
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        top: 10px;
        left: auto;
        right: 20px;
      }
    `;
  }}
`;

const CategoryList = styled.div`
  position: absolute;
  top: 44px;
  left: 20px;
  display: flex;
  flex-direction: column;
  width: 82px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 0px 0px 5px 5px;
  z-index: 5;
`;

const CategoryItem = styled.div<CategoryItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 31px;
  color: ${({ isSelected, theme }) => isSelected && theme.colors.blue};
  background-color: ${({ isSelected, theme }) => isSelected && theme.colors.blue3};
  cursor: pointer;
  &:first-of-type {
    padding: 9px 0 4px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  }
  &:last-of-type {
    padding: 4px 0 5px 0;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 83px;
  width: 100%;
  ${({ theme }) => {
    return css`
      ${theme.fonts.title}
      ${theme.mediaQuery.mobile} {
        gap: 97px;
      }
    `;
  }}
`;

const Dimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
`;
