import { styled } from "styled-components";
import { FaRegCopyright } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -1em;
  gap: 0.2em;
`;

const Line = styled.div`
  width: 100%;
  height: 5px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.secondaryColor},
    ${({ theme }) => theme.tertiaryColor}
  );

  color: transparent;
`;

const TradeMark = styled.div`
  display: flex;
  gap: 0.2em;
  justify-content: center;
  align-items: center;
  color: #7e908e;
  margin: 0;
  font-size: 0.8em;
`;

const IconColor = "#7E908E";

const LastLine = () => {
  return (
    <Container>
      <TradeMark>
        <FaRegCopyright size={14} color={IconColor} /> 2023, Abdulahi Muhammed.
        all rights reserved.
      </TradeMark>
      <Line />
    </Container>
  );
};
export default LastLine;
