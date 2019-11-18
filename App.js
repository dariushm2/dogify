import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import BreedsList from "./components/BreedsList";
import BreedImageGallery from "./components/BreedImageGallery";
import ImagePager from "./components/ImagePager";

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
  },
  ImagePager: {
    screen: ImagePager
  }
});

const App = createAppContainer(MainNavigator);

export default App;
