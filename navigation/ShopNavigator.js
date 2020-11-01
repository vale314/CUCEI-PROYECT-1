import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import Colors from "../constants/Colors";

import { Platform, View, Text, SafeAreaView, Button } from "react-native";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen, {
  screenOptions as homeOptionsScreen,
} from "../screens/users/homeScreen";

import FavScreen, {
  screenOptions as favOptionsScreen,
} from "../screens/users/favScreen";

import SearchScreen, {
  screenOptions as searchOptionsScreen,
} from "../screens/users/searchScreen";

import SettingsScreen, {
  screenOptions as settingsOptionsScreen,
} from "../screens/users/settingScreen";

import PlaceScreen, {
  screenOptions as placeOptionsScreen,
} from "../screens/users/util/placeScreen";

import PriceScreen, {
  priceScreen as priceOptionsScreen,
} from "../screens/users/util/price/priceScreen";

import DietScreen, {
  dietScreen as dietOptionsScreen,
} from "../screens/users/util/dietScreen";

import ShopScreen, {
  shopScreen as shopOptionsScreen,
} from "../screens/users/util/shopScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const StackHome = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <StackHome.Navigator screenOptions={defaultNavOptions}>
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={homeOptionsScreen}
      />
      <StackHome.Screen
        name="Place"
        component={PlaceScreen}
        options={placeOptionsScreen}
      />
      <StackHome.Screen
        name="Diet"
        component={DietScreen}
        options={dietOptionsScreen}
      />
      <StackHome.Screen
        name="Price"
        component={PriceScreen}
        options={priceOptionsScreen}
      />
    </StackHome.Navigator>
  );
};

const StackFav = createStackNavigator();

export const FavNavigator = () => {
  return (
    <StackFav.Navigator screenOptions={defaultNavOptions}>
      <StackFav.Screen
        name="Favorite"
        component={FavScreen}
        options={favOptionsScreen}
      />
      <StackHome.Screen
        name="Place"
        component={PlaceScreen}
        options={placeOptionsScreen}
      />
    </StackFav.Navigator>
  );
};

const StackSearch = createStackNavigator();

export const SearchNavigator = () => {
  return (
    <StackSearch.Navigator screenOptions={defaultNavOptions}>
      <StackSearch.Screen
        name="Search"
        options={searchOptionsScreen}
        component={SearchScreen}
      />
      <StackHome.Screen
        name="Place"
        component={PlaceScreen}
        options={placeOptionsScreen}
      />
    </StackSearch.Navigator>
  );
};

const StackSetting = createStackNavigator();

export const SettingNavigator = () => {
  return (
    <StackSetting.Navigator screenOptions={defaultNavOptions}>
      <StackSetting.Screen
        name="Setting"
        options={settingsOptionsScreen}
        component={SettingsScreen}
      />
    </StackSetting.Navigator>
  );
};

const StackPlace = createStackNavigator();

export const PlaceNavigator = () => {
  return (
    <StackPlace.Navigator screenOptions={defaultNavOptions}>
      <StackPlace.Screen
        name="Place"
        options={placeOptionsScreen}
        component={PlaceScreen}
      />
    </StackPlace.Navigator>
  );
};

const BottonNavigatorApp = createBottomTabNavigator();

export const BottonApp = () => {
  return (
    <BottonNavigatorApp.Navigator
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
      }}
    >
      <BottonNavigatorApp.Screen
        name="Comida"
        component={HomeNavigator}
        options={{
          tabBarIcon: (props) => (
            <Ionicons name="ios-restaurant" size={25} color={props.color} />
          ),
        }}
      />

      <BottonNavigatorApp.Screen
        name="Buscar"
        component={SearchNavigator}
        options={{
          tabBarIcon: (props) => (
            <Ionicons name="ios-search" size={25} color={props.color} />
          ),
        }}
      />

      <BottonNavigatorApp.Screen
        name="Fav"
        component={FavNavigator}
        options={{
          tabBarIcon: (props) => (
            <Ionicons name="ios-star" size={25} color={props.color} />
          ),
        }}
      />

      <BottonNavigatorApp.Screen
        name="Usuario"
        component={SettingNavigator}
        options={{
          tabBarIcon: (props) => (
            <Ionicons name="ios-person" size={25} color={props.color} />
          ),
        }}
      />
    </BottonNavigatorApp.Navigator>
  );
};

const DrawerMain = createDrawerNavigator();

export const ShopNavigator = () => {
  const dispatch = useDispatch();

  return (
    <DrawerMain.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <DrawerItemList {...props} />
              <Button
                title="Logout"
                color={Colors.primary}
                onPress={() => {
                  dispatch(authActions.logout());
                  // props.navigation.navigate('Auth');
                }}
              />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <DrawerMain.Screen
        name="Home"
        component={BottonApp}
        options={{
          drawerIcon: (props) => (
            <Ionicons name="ios-cart" size={23} color={props.color} />
          ),
        }}
      />
    </DrawerMain.Navigator>
  );
};
