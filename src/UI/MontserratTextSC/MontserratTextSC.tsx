import styled from "styled-components/native";

const MontserratTextSC = styled.Text<{ fontWeight: 400 | 500 | 600 }>`
  font-family: ${({ fontWeight }) =>
    fontWeight === 400
      ? "Montserrat-Regular"
      : fontWeight === 500
      ? "Montserrat-Medium"
      : "Montserrat-SemiBold"};
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default MontserratTextSC;
