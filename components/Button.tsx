import styled from "@emotion/styled";
import { Button } from "antd";

export default function Submit({ children }: { children: React.ReactNode }) {
  const onClick = () => {
    console.log("click");
  };
  return (
    <SubmitButton type="primary" onClick={onClick}>
      {children}
    </SubmitButton>
  );
}

const SubmitButton = styled(Button)`
  width: 200px;
  height: auto;
  font-size: 20px;
  padding: 0.2rem;
`;
