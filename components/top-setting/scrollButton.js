import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import ButtonItem from "./buttonItem";
import { AntDesign } from "@expo/vector-icons";

const ScrollButton = ({ data }) => {
  const onPress = (value) => {
    console.log(value);
  };
  return (
    <ScrollView
      horizontal
      scrollEnabled
      snapToAlignment="center"
      scrollEventThrottle={16}
      decelerationRate={"fast"}
      showsHorizontalScrollIndicator={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
    >
      {data.map((i, j) => {
        return (
          <ButtonItem onPress={() => onPress(i.route)}>
            <Text> {i.title} </Text>
            {i.icon !== "null" ? (
              <AntDesign name={i.icon} size={i.sizeIcon} color="black" />
            ) : (
              <View></View>
            )}
          </ButtonItem>
        );
      })}
    </ScrollView>
  );
};

export default ScrollButton;
