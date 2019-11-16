import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import BreedsList from "./components/BreedsList";
import BreedImageGallery from "./components/BreedImageGallery";
import Header from "./components/Header";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigator = createStackNavigator({
  BreedsList: {
    screen: BreedsList,
    navigationOptions: ({ navigation }) => ({
      title: "Dogify"
    })
  },
  BreedImageGallery: {
    screen: BreedImageGallery
  }
});

const App = createAppContainer(MainNavigator);

export default App;
