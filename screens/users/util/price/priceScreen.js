import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../../../../components/UI/HeaderButton";
import ButtonItem from "./buttonItem";
import ButtonText from "./buttonText";

import { FontAwesome } from "@expo/vector-icons";

import filter from "../../../../constants/Filter";
import color from "../../../../constants/Colors";

import { setFilters } from "../../../../store/actions/foods";

const PriceScrren = (props) => {
  const stateInitial = {
    PRICE_1: { price: false, title: filter.PRICE_1 },
    PRICE_2: { price: false, title: filter.PRICE_2 },
    PRICE_3: { price: false, title: filter.PRICE_3 },
  };
  const [items, setItem] = useState(stateInitial);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const dispatch = useDispatch();

  const onPress = (value) => {
    dispatch(setFilters({ title: value }));
  };

  const filtersActives = useSelector((state) => state.foods.filters);

  useEffect(() => {
    const itemAux = stateInitial;

    filtersActives.map((i) => {
      if (i.title == itemAux.PRICE_1.title) {
        itemAux.PRICE_1.price = !itemAux.PRICE_1.price;
      }

      if (i.title == itemAux.PRICE_2.title) {
        itemAux.PRICE_2.price = !itemAux.PRICE_2.price;
      }
      if (i.title == itemAux.PRICE_3.title) {
        itemAux.PRICE_3.price = !itemAux.PRICE_3.price;
      }
    });
    setItem(itemAux);
    forceUpdate();
  }, [filtersActives]);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Text style={styles.H1}> Rango De Precios {items.PRICE_1.price} </Text>

      <ButtonItem
        onPress={() => onPress(filter.PRICE_1)}
        color={
          items.PRICE_1.price ? color.buttonActive : color.buttonInactivePrice
        }
      >
        <FontAwesome
          name="dollar"
          size={25}
          color={items.PRICE_1.price ? color.textActive : color.textInactive}
        />
      </ButtonItem>

      <ButtonItem
        onPress={() => onPress(filter.PRICE_2)}
        color={
          items.PRICE_2.price ? color.buttonActive : color.buttonInactivePrice
        }
      >
        <FontAwesome
          name="dollar"
          size={25}
          color={items.PRICE_2.price ? color.textActive : color.textInactive}
        />
        <FontAwesome
          name="dollar"
          size={25}
          color={items.PRICE_2.price ? color.textActive : color.textInactive}
        />
      </ButtonItem>

      <ButtonItem
        onPress={() => onPress(filter.PRICE_3)}
        color={
          items.PRICE_3.price ? color.buttonActive : color.buttonInactivePrice
        }
      >
        <FontAwesome
          name="dollar"
          size={25}
          color={items.PRICE_3.price ? color.textActive : color.textInactive}
        />
        <FontAwesome
          name="dollar"
          size={25}
          color={items.PRICE_3.price ? color.textActive : color.textInactive}
        />
        <FontAwesome
          name="dollar"
          size={25}
          color={items.PRICE_3.price ? color.textActive : color.textInactive}
        />
      </ButtonItem>

      <ButtonText
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <Text style={styles.text}> Aplicar </Text>
      </ButtonText>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Your Products",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={
            Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"
          }
          onPress={() => {
            navData.navigation.goBack();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  H1: {
    fontSize: 25,
    color: "black",
  },
  text: { fontSize: 25, color: "white" },
});

export default PriceScrren;
