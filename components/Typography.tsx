import styled from "@emotion/styled";

export default function Typo({
  children,
  size,
  bold,
}: {
  children: string;
  size: number;
  bold?: boolean;
}) {
  return (
    <Typography size={size} bold={bold}>
      {children}
    </Typography>
  );
}

const Typography = styled.p<{ size: number; bold?: boolean }>`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  margin: 0;
`;
