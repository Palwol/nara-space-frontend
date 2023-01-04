import Header from '@/components/Header';
import styled from 'styled-components';

export default function User() {
  return (
    <Container>
      <Header pathname="/user" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
