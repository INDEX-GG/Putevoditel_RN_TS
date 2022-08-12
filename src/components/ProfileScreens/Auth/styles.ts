import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
  wrapper: {
    marginBottom: 80,
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 32,
    width: 234,
  },
});

export const useAuthStyles = () => styles;
