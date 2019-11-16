import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../res/Colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dogify</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#25ab3a"
  },
  title: {
    color: "white",
    fontSize: 30,
    paddingHorizontal: 30,
    paddingTop: 110,
    paddingBottom: 10
  }
});

export default Header;
