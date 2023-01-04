import Logo from '@/assets/images/logo.svg';
import { PATH } from '@/constants/path';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  pathname: string;
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
      <Logo />
      <NavigationContainer>
        <NavigationButton value={PATH.main} isSelected={pathname === PATH.main} onClick={handleNavigationButtonClick}>
          PAGE 01
        </NavigationButton>
        <NavigationButton value={PATH.user} isSelected={pathname === PATH.user} onClick={handleNavigationButtonClick}>
          PAGE 02
        </NavigationButton>
      </NavigationContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.blue3};
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

const NavigationButton = styled.button<NavigationButtonProps>`
  ${({ isSelected, theme }) => (isSelected ? theme.fonts.naviBold : theme.fonts.navi)}
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.blue : theme.colors.white)};
`;
