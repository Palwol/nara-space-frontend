import { UserData } from '@/api/api';
import { Ellipsis } from '@/styles/styleUtils';
import styled from 'styled-components';
import Check from '@/assets/images/check.svg';

type Props = {
  data: UserData[];
  nameWidth: number;
  setCheckBox: boolean;
};

type NameSpanProps = {
  nameWidth: number;
};

type CheckBoxProps = {
  isChecked: boolean;
};

export default function List({ data, nameWidth, setCheckBox }: Props) {
  return (
    <Container>
      <UserList>
        {data.map((item) => (
          <UserItem key={item.id}>
            <UserInfoContainer>
              <NameSpan nameWidth={nameWidth}>{item.name}</NameSpan>
              <span>{item.date.replaceAll('-', '.')}</span>
            </UserInfoContainer>
            {setCheckBox && <CheckBox isChecked={item.checked}>{item.checked && <Check />}</CheckBox>}
          </UserItem>
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
  padding: 10px 20px;
`;

const UserItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 39px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  ${({ theme }) => theme.fonts.body};
  &:last-of-type {
    border: none;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NameSpan = styled(Ellipsis)<NameSpanProps>`
  width: ${({ nameWidth }) => nameWidth}px;
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
