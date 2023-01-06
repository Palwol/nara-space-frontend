import { UserData } from '@/api/api';
import styled, { css } from 'styled-components';

type Props = {
  selectedUser: UserData;
  userDetail?: boolean;
};

type ContainerType = {
  userDetail?: boolean;
};

type InfoType = {
  text: string;
  name: keyof UserData;
};

const infos: InfoType[] = [
  {
    text: '이름',
    name: 'name',
  },
  {
    text: '생년월일',
    name: 'date',
  },
  {
    text: '한마디',
    name: 'comment',
  },
];

export default function UserInfo({ selectedUser, userDetail }: Props) {
  return (
    <Container userDetail={userDetail}>
      <Divider />
      <Profile>
        <img
          src={
            selectedUser && selectedUser.image.length
              ? require(`@/assets/images/profile${selectedUser.image}`)
              : require('@/assets/images/profile-default.png')
          }
        />
      </Profile>
      <InfoList>
        {infos.map((info, index) => (
          <InfoItemContainer key={info.name}>
            <InfoItem>
              <span>{info.text}</span>
              <span>{selectedUser && selectedUser[info.name]}</span>
            </InfoItem>
            {index === infos.length - 1 || <DivideLine />}
          </InfoItemContainer>
        ))}
      </InfoList>
    </Container>
  );
}

const Container = styled.div<ContainerType>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 88px;
  width: ${({ userDetail }) => (userDetail ? 622 : 352)}px;
  height: 425px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        width: 353px;
      }
    `;
  }}
`;

const Divider = styled.div`
  width: 100%;
  height: 172px;
  background-color: ${({ theme }) => theme.colors.lightblue1};
`;

const Profile = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 19.161px 19.161px 35.9269px -12.2152px rgba(0, 0, 0, 0.05);
`;

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 302px;
`;

const InfoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const InfoItem = styled.li`
  display: flex;
  gap: 10px;
  width: 100%;
  ${({ theme }) => theme.fonts.body};
  span {
    &:first-of-type {
      width: 80px;
      ${({ theme }) => theme.fonts.title};
    }
  }
`;

const DivideLine = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray1};
`;
