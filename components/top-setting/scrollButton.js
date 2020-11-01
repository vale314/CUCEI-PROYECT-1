import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import ButtonItem from "./buttonItem";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import { setFilters } from "../../store/actions/foods";

const ScrollButton = ({ data, navigation }) => {
  const dispatch = useDispatch();

  const onPress = (value) => {
    if (value.filter !== null) dispatch(setFilters(value));
    else navigation.navigate(value.route);
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
          <ButtonItem onPress={() => onPress(i)} key={j}>
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
