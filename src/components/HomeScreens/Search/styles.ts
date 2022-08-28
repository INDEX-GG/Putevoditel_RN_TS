import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
  },
  container: {
    height: "100%",
    paddingHorizontal: 18,
  },
  scrollContainer: {
    paddingHorizontal: 18,
  },
  searchInput: {
    paddingRight: 65,
    paddingBottom: 0,
    paddingTop: 0,
  },
  searchContainer: {
    position: "relative",
    minHeight: 45,
    marginBottom: 10,
  },
  iconContainer: {
    width: 30,
    height: 30,
  },
  searchButton: {
    position: "absolute",
    top: 7,
    right: 0,
    width: 50,
  },
  flatListContainer: {
    paddingHorizontal: 17,
  },
});

export const useSearchStyles = () => styles;
