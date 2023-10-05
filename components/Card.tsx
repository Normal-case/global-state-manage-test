import styled from "@emotion/styled";
import { Checkbox } from "antd";
import Typo from "../components/Typography";
import { StarFilled, StarOutlined } from "@ant-design/icons";

export default function Card({
  title,
  contents,
}: {
  title: string;
  contents: string;
}) {
  return (
    <Container>
      <Contents>
        <Checkbox />
        <TodoContainer>
          <Typo size={16} bold>
            {title}
          </Typo>
          <Typo size={12}>{contents}</Typo>
        </TodoContainer>
      </Contents>
      <Important>
        <StarBox>
          <StarFilled />
        </StarBox>
      </Important>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;
const Contents = styled.div`
  display: flex;
  gap: 1rem;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Important = styled.div`
  display: flex;
  align-items: center;
`;

const StarBox = styled.div`
  cursor: pointer;
  font-size: 20px;
  height: 20px;
  display: flex;
`;
