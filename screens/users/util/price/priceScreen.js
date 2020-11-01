import React, { useState, useEffect } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../../../../components/UI/HeaderButton";
import ButtonItem from "./buttonItem";
import ButtonText from "./buttonText";

import { FontAwesome } from "@expo/vector-icons";

import filter from "../../../../constants/Filter";
import { setFilters } from "../../../../store/actions/foods";

const PriceScrren = (props) => {
  const stateInitial = {
    PRICE_1: { price: false, title: filter.PRICE_1 },
    PRICE_2: { price: false, title: filter.PRICE_2 },
    PRICE_3: { price: false, title: filter.PRICE_3 },
  };

  const [items, setItem] = useState(stateInitial);

  const dispatch = useDispatch();

  const onPress = (value) => {
    dispatch(setFilters({ title: value }));
  };

  const filtersActives = useSelector((state) => state.foods.filters);

  useEffect(() => {
    const itemAux = stateInitial;

    filtersActives.map((i) => {
      if (i.title == itemAux.PRICE_1.title)
        itemAux.PRICE_1.price = !itemAux.PRICE_1.price;

      if (i.title == itemAux.PRICE_2.title)
        itemAux.PRICE_2.price = !itemAux.PRICE_2.price;

      if (i.title == itemAux.PRICE_3.title)
        itemAux.PRICE_3.price = !itemAux.PRICE_3.price;
    });
    return setItem(itemAux);
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
      <Text style={styles.H1}> Rango De Precios </Text>

      <ButtonItem
        onPress={() => onPress(filter.PRICE_1)}
        backgroundColor="black"
      >
        <FontAwesome name="dollar" size={25} color="white" />
      </ButtonItem>

      <ButtonItem onPress={() => onPress(filter.PRICE_2)}>
        <FontAwesome name="dollar" size={25} color="black" />
        <FontAwesome name="dollar" size={25} color="black" />
      </ButtonItem>

      <ButtonItem onPress={() => onPress(filter.PRICE_3)}>
        <FontAwesome name="dollar" size={25} color="black" />
        <FontAwesome name="dollar" size={25} color="black" />
        <FontAwesome name="dollar" size={25} color="black" />
      </ButtonItem>

      <ButtonText onPress={() => onPress(filter.PRICE_3)}>
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
