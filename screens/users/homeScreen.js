import React from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";

import Carousel from "../../components/carousel/carousel";

import { data } from "../../components/data/data";
import ScrollButton from "../../components/top-setting/scrollButton";

import dataB from "../../constants/Filters";

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

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  scrollView: {
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
});

export default HomeScreen;
