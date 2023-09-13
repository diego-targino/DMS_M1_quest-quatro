import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: "20%",
    rowGap: 5,
  },
  inputLabel: {
    fontWeight: "700",
    fontSize: 16,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    width: 120,
    textAlign: "center",
  },
  openModalButton: {
    borderRadius: 10,
  },
});
