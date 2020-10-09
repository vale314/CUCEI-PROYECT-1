import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const ButtonTex = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.SubmitButtonStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  SubmitButtonStyle: {
    marginHorizontal: 5,
    width: width - 50,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default ButtonTex;
