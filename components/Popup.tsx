import styled from "@emotion/styled";
import Typo from "./Typography";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Popup() {
  const router = useRouter();
  return (
    <Container>
      <Header>
        <Typo size={20} bold>
          약관 동의
        </Typo>
      </Header>
      <Header>
        <Typo size={16}>약관 동의 안하면 안 사라짐</Typo>
      </Header>
      <Footer>
        <Button type="primary" onClick={() => router.push("/policy")}>
          동의
        </Button>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  background-color: #bfffd0;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: 2px solid #bfffd0;
  border-radius: 5px;
  padding: 1rem;
`;

const Header = styled.div`
  width: 100%;
  padding-left: 1rem;
  display: flex;
  justify-content: start;
`;

const Footer = styled.div`
  width: 100%;
  padding-right: 1rem;
  display: flex;
  justify-content: end;
`;
