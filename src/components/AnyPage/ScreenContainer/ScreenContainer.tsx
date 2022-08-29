import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  ViewProps,
  ScrollViewProps,
  SafeAreaView,
} from "react-native";
import { WHITE_COLOR } from "../../../lib/constants/constantsColors";

interface IScreenContainerProps {
  children: React.ReactNode;
  isScroll?: boolean;
  isSafeAreaView?: boolean;
  backgroundColor?: string;
  viewProp?: ViewProps;
  scrollViewProps?: ScrollViewProps;
}

const ScreenContainer = (props: IScreenContainerProps) => {
  const {
    children,
    viewProp,
    isScroll = true,
    isSafeAreaView = true,
    backgroundColor = WHITE_COLOR,
    scrollViewProps,
  } = props;

  const Container = isSafeAreaView ? SafeAreaView : React.Fragment;

  return (
    <Container style={{ backgroundColor, height: "100%" }}>
      <GetWrapper
        isScroll={isScroll}
        viewProp={viewProp}
        scrollViewProps={scrollViewProps}>
        {children}
      </GetWrapper>
    </Container>
  );
};

const GetWrapper = ({
  isScroll,
  children,
  viewProp,
  scrollViewProps,
}: Pick<
  IScreenContainerProps,
  "isScroll" | "children" | "viewProp" | "scrollViewProps"
>) => {
  const styleProps = [
    styles.container,
    isScroll ? scrollViewProps?.style : viewProp?.style,
  ];

  return isScroll ? (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      {...scrollViewProps}
      style={styleProps}>
      {children}
    </ScrollView>
  ) : (
    <View {...viewProp} style={styleProps}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    height: "100%",
    width: "100%",
    backgroundColor: WHITE_COLOR,
  },
});

export default React.memo(ScreenContainer);
