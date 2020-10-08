import React from "react";
import { View, Text, Platform, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";

import Carousel from "../../components/carousel/carousel";

import { data } from "../../components/data/data";

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

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.scrollView}>
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
