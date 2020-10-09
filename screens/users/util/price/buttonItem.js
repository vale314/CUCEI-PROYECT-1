import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonItem = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.SubmitButtonStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  SubmitButtonStyle: {
    marginLeft: 15,
    marginHorizontal: 5,

    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 33,
    borderWidth: 1.0,
    width: 66,
    height: 66,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ButtonItem;
