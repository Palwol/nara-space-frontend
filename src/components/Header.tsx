import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/icons/logo.svg';
import { PATH } from '@/constants/path';
import { DEVICE } from '@/constants/device';

type HeaderProps = {
  pathname: '/' | '/user';
};

type NavigationButtonProps = {
  isSelected: boolean;
};

export default function Header({ pathname }: HeaderProps) {
  const navigate = useNavigate();

  const handleNavigationButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(e.currentTarget.value);
  };

  return (
    <Container>
      <HeaderContainer>
        <Logo />
        <NavigationContainer className={DEVICE.desktop}>
          <NavigationButton value={PATH.main} isSelected={pathname === PATH.main} onClick={handleNavigationButtonClick}>
            PAGE 01
          </NavigationButton>
          <NavigationButton value={PATH.user} isSelected={pathname === PATH.user} onClick={handleNavigationButtonClick}>
            PAGE 02
          </NavigationButton>
        </NavigationContainer>
      </HeaderContainer>
      <MobileNavigationContainer className={DEVICE.mobile}>
        <MobileNavigationButton
          value={PATH.main}
          isSelected={pathname === PATH.main}
          onClick={handleNavigationButtonClick}
        >
          PAGE01
        </MobileNavigationButton>
        <MobileNavigationButton
          value={PATH.user}
          isSelected={pathname === PATH.user}
          onClick={handleNavigationButtonClick}
        >
          PAGE02
        </MobileNavigationButton>
      </MobileNavigationContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 99;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.blue4};
  ${({ theme }) => {
    return css`
      ${theme.mediaQuery.mobile} {
        height: 64px;
        padding: 0 21px;
      }
    `;
  }}
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

const NavigationButton = styled.button<NavigationButtonProps>`
  ${({ isSelected, theme }) => {
    return css`
      ${isSelected ? theme.fonts.naviBold : theme.fonts.navi}
      color: ${isSelected ? theme.colors.blue : theme.colors.white};
    `;
  }}
`;

const MobileNavigationContainer = styled.div`
  display: flex;
`;

const MobileNavigationButton = styled.button<NavigationButtonProps>`
  width: 100%;
  height: 47px;
  ${({ isSelected, theme }) => {
    return css`
      ${isSelected ? theme.fonts.naviBold : theme.fonts.navi}
      color: ${theme.colors.white};
      background-color: ${isSelected ? theme.colors.blue : theme.colors.blue1};
    `;
  }}
`;
