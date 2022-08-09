import styled from "styled-components/native";

const MontserratTextSC = styled.Text<{ fontWeight: 400 | 500 | 600 }>`
  font-family: Montserrat;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export default MontserratTextSC;
