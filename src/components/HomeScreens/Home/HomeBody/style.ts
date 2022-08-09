import styled from "styled-components/native";

const ContainerSC = styled.View`
  height: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 33px;
`;

export const useHomeBodyStyles = () => ({
  ContainerSC,
});
