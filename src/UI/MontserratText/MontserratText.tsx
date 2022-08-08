import styled from "styled-components/native";

const MontserratTextSC = styled.Text<{ fontWeight: 500 | 600 }>`
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.lightPurple};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default MontserratTextSC;
