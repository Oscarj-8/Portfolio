import { styled } from "styled-components";

const Line = styled.div`
  margin-top: -1.5em;
  width: 100%;
  height: 5px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.secondaryColor},
    ${({ theme }) => theme.tertiaryColor}
  );

  color: transparent;
`;

const LastLine = () => {
  return <Line />;
};
export default LastLine;
