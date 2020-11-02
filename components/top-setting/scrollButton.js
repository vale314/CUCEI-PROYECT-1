import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, Text, View } from "react-native";
import ButtonItem from "./buttonItem";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { setFilters, setFiltersReset } from "../../store/actions/foods";
import filter from "../../constants/Filter";
import color from "../../constants/Colors";

const ScrollButton = ({ data, navigation }) => {
  const [filtersItems, setFiltersItems] = useState(new Map());

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const filtersActives = useSelector((state) => state.foods.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    const itemAux = new Map();

    filtersActives.map((i) => {
      if (
        i.title == filter.PRICE_1 ||
        i.title == filter.PRICE_2 ||
        i.title == filter.PRICE_3
      ) {
        itemAux.set(filter.ACTIVE_PRICE, true);
      }
      if (i.key == filter.ACTIVE_TOP) itemAux.set(filter.ACTIVE_TOP, true);
      if (i.key == filter.ACTIVE_POPULAR)
        itemAux.set(filter.ACTIVE_POPULAR, true);
    });
    setFiltersItems(itemAux);
    forceUpdate();
  }, [filtersActives]);

  const onPress = (value) => {
    if (value.filter !== null) dispatch(setFilters(value));
    else navigation.navigate(value.route);
  };

  const onReset = () => {
    dispatch(setFiltersReset());
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
      {filtersActives.length ? (
        <ButtonItem onPress={() => onReset()} color={color.buttonInactive}>
          <Text style={{ color: color.textInactive }}> Limpiar</Text>
        </ButtonItem>
      ) : (
        <View></View>
      )}
      {data.map((i, j) => {
        return (
          <ButtonItem
            onPress={() => onPress(i)}
            key={j}
            color={
              filtersItems.get(i.key)
                ? color.buttonActive
                : color.buttonInactive
            }
          >
            <Text
              style={{
                color: filtersItems.get(i.key)
                  ? color.textActive
                  : color.textInactive,
              }}
            >
              {" "}
              {i.title}{" "}
            </Text>
            {i.icon !== "null" ? (
              <AntDesign
                name={i.icon}
                size={i.sizeIcon}
                color={
                  filtersItems.get(i.key)
                    ? color.textActive
                    : color.textInactive
                }
              />
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
