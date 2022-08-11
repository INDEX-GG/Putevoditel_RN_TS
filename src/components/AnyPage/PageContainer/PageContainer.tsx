import React from "react";
import styled from "styled-components/native";
import { WHITE_COLOR } from "../../../lib/constants/constantsColors";
import { SafeAreaView } from "react-native-safe-area-context";

interface IPageContainerProps {
  children: React.ReactChildren | React.ReactNode;
  height?: string;
  paddingTop?: number;
  paddingHorizontal?: number;
  backgroundColor?: string;
  isSafeAreaView?: boolean;
}

const PageContainer = ({
  children,
  height = "100%",
  paddingTop = 20,
  paddingHorizontal = 0,
  isSafeAreaView = false,
  backgroundColor = WHITE_COLOR,
}: IPageContainerProps) => {
  const Wrapper = isSafeAreaView ? SafeAreaView : React.Fragment;

  return (
    <ContainerSC
      height={height}
      paddingTop={paddingTop}
      backgroundColor={backgroundColor}
      paddingHorizontal={paddingHorizontal}>
      <Wrapper>{children}</Wrapper>
    </ContainerSC>
  );
};

const ContainerSC = styled.View<{
  height?: string;
  paddingTop: number;
  backgroundColor: string;
  paddingHorizontal: number;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: ${({ height }) => height};
  padding: ${({ paddingTop, paddingHorizontal }) =>
      `${paddingTop}px ${paddingHorizontal}px`}
    0px;
`;

export default React.memo(PageContainer);
