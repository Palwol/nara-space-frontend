import { UserData } from '@/api/api';
import { Ellipsis } from '@/styles/styleUtils';
import styled, { css } from 'styled-components';
import Check from '@/assets/icons/check.svg';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { changeUserChecked } from '@/store/users-slice';

type Props = {
  data: UserData[];
  nameWidth: number;
  setCheckBox: boolean;
};

type UserItemProps = {
  setCheckBox: boolean;
  isChecked: boolean;
};

type NameSpanProps = {
  nameWidth: number;
};

type CheckBoxProps = {
  isChecked: boolean;
};

export default function List({ data, nameWidth, setCheckBox }: Props) {
  const dispatch = useAppDispatch();

  const handleUserClick = (id: number) => {
    if (!setCheckBox) return;
    dispatch(changeUserChecked({ id }));
  };

  return (
    <Container>
      <UserList>
        {data.map((item, index) => (
          <UserItemContainer key={item.id}>
            <UserItem setCheckBox={setCheckBox} isChecked={item.checked} onClick={() => handleUserClick(item.id)}>
              <UserInfoContainer>
                <NameSpan nameWidth={nameWidth}>{item.name}</NameSpan>
                <span>{item.date.replaceAll('-', '.')}</span>
              </UserInfoContainer>
              {setCheckBox && (
                <CheckBoxContainer>
                  <CheckBox isChecked={item.checked}>{item.checked && <Check />}</CheckBox>
                </CheckBoxContainer>
              )}
            </UserItem>
            {index === data.length - 1 || <DivideLine />}
          </UserItemContainer>
        ))}
      </UserList>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 0;
`;

const UserItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivideLine = styled.hr`
  width: calc(100% - 40px);
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray1};
`;

const UserItem = styled.div<UserItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 39px;
  padding: 0 20px;
  background-color: ${({ setCheckBox, isChecked, theme }) => setCheckBox && isChecked && theme.colors.blue2};
  ${({ theme }) => theme.fonts.body};
  cursor: ${({ setCheckBox }) => setCheckBox && 'pointer'};
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NameSpan = styled(Ellipsis)<NameSpanProps>`
  width: ${({ nameWidth }) => nameWidth}px;
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        width: 114px;
      }
    `;
  }}
`;

const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        margin-right: 34px;
      }
    `;
  }}
`;

const CheckBox = styled.div<CheckBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background-color: ${({ isChecked, theme }) => isChecked && theme.colors.blue};
`;
