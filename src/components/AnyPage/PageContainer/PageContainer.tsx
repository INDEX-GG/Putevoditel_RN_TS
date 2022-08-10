import React from "react";
import styled from "styled-components/native";
import { WHITE_COLOR } from "../../../lib/constants/constantsColors";
import { SafeAreaView } from "react-native-safe-area-context";

interface IPageContainerProps {
  children: React.ReactChildren | React.ReactNode;
  backgroundColor?: string;
  isSafeAreaView?: boolean;
}

const PageContainer = ({
  children,
  isSafeAreaView = false,
  backgroundColor = WHITE_COLOR,
}: IPageContainerProps) => {
  const Wrapper = isSafeAreaView ? SafeAreaView : React.Fragment;

  return (
    <ContainerSC backgroundColor={backgroundColor}>
      <Wrapper>{children}</Wrapper>
    </ContainerSC>
  );
};

const ContainerSC = styled.View<{ backgroundColor: string }>`
  padding-top: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  height: 100%;
`;

export default React.memo(PageContainer);
