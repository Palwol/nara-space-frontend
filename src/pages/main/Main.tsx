import Header from '@/components/Header';
import styled from 'styled-components';

export default function Main() {
  return (
    <Container>
      <Header pathname="/" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
