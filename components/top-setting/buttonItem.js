import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ButtonItem = ({ onPress, children, color }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.SubmitButtonStyle, backgroundColor: color }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  SubmitButtonStyle: {
    marginLeft: 15,
    marginHorizontal: 5,
    flex: 1,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: "rgba(0,0,0,.05)",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ButtonItem;
