import styled from "@emotion/styled";
import { Input } from "antd";

export default function AddTodo() {
  const clickEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") console.log("enter");
  };
  return (
    <TodoInput
      showCount
      maxLength={20}
      onKeyDown={clickEnter}
      placeholder="할 일을 적어주세요"
    />
  );
}

const TodoInput = styled(Input)`
  font-size: 20px;
`;
