"use client";
import styled from "@emotion/styled";
import Typo from "@/components/Typography";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <Title>약관 동의</Title>
      <Typo size={20}>약관에 동의하시겠습니까?</Typo>
      <ButtonBox>
        <Button type="primary" onClick={() => router.push("/")}>
          동의
        </Button>
        <Button type="default" onClick={() => router.push("/")}>
          취소
        </Button>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 62px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 1rem;
`;
