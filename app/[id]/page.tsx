"use client";
import Typo from "@/components/Typography";
import styled from "@emotion/styled";
import { Button, Checkbox } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Submit from "@/components/Button";
import { useRouter } from "next/navigation";
const { TextArea } = Input;

export default function Detail() {
  const router = useRouter();
  return (
    <Container>
      <Header>
        <HeaderFront>
          <CheckBoxContainer>
            <Checkbox />
          </CheckBoxContainer>
          <InputCustom showCount maxLength={20} />
        </HeaderFront>
        <StarBox>
          <StarFilled />
        </StarBox>
      </Header>
      <TextAreaCustome />
      <Checkbox>해당 TODO 저장하기 (localstorage)</Checkbox>
      <ButtonBox>
        <Submit>저장</Submit>
        <ButtonCustom type="default" onClick={() => router.push("/")}>
          취소
        </ButtonCustom>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderFront = styled.div`
  display: flex;
  gap: 20px;
`;

const CheckBoxContainer = styled.div`
  transform: scale(1.5);
  display: flex;
`;

const InputCustom = styled(Input)`
  width: 300px;
`;

const TextAreaCustome = styled(TextArea)`
  width: 500px;
`;

const StarBox = styled.div`
  cursor: pointer;
  font-size: 20px;
  height: 20px;
  display: flex;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ButtonCustom = styled(Button)`
  width: 200px;
  height: auto;
  font-size: 20px;
  padding: 0.2rem;
`;
