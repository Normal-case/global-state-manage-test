"use client";
import AddTodo from "@/components/Input";
import styled from "@emotion/styled";
import Submit from "@/components/Button";
import Card from "@/components/Card";
import Popup from "@/components/Popup";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Title>Todo App</Title>
      <AddTodo />
      <Submit>Submit</Submit>

      {/* todo: 해야할 일이 추가되면 새로운 카드를 만듦 */}
      <Link href={`/${1}`}>
        <Card title={"오늘 해야할일"} contents={"컨텐츠 쓰는 곳"} />
      </Link>

      <Popup />
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
