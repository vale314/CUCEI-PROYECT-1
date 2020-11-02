import React from "react";
import { Platform, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../../components/UI/HeaderButton";

import Carousel from "../../components/carousel/carousel";

import { data } from "../../components/data/data";
import ScrollButton from "../../components/top-setting/scrollButton";

import filter from "../../constants/Filter";

const styles = {
  image: {
    width: "100%",
    height: 200,
  },
  scrollView: {
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    textAlgin: "center",
  },
};

const uri =
  "https://images.pexels.com/photos/1603845/pexels-photo-1603845.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

const dataB = [
  {
    title: "Rango De Precios",
    icon: "tagso",
    sizeIcon: 25,
    key: filter.ACTIVE_PRICE,
    route: "Price",
    filter: null,
  },
  {
    title: "Top",
    icon: "null",
    key: filter.ACTIVE_TOP,
    route: "",
    filter: filter.TOP,
  },
  {
    title: "Mas Popular",
    icon: "up",
    key: filter.ACTIVE_POPULAR,
    sizeIcon: 15,
    route: "",
    filter: filter.POPULAR,
  },
  {
    title: "Tipos De Dietas",
    icon: "hearto",
    sizeIcon: 15,
    key: filter.ACTIVE_DIET,
    route: "Diet",
    filter: null,
  },
];
const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <ScrollButton data={dataB} {...props} />
      <Carousel data={data} />
    </ScrollView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "CUCEI",
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
            Platform.OS === "android" ? "md-arrow-down" : "ios-arrow-down"
          }
          onPress={() => {
            navData.navigation.navigate("Place");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default HomeScreen;
