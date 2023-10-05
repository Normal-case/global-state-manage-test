import styled from "@emotion/styled";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 100vh;
`;
