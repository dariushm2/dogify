import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";

const BreedItem = props => {
  const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [imageUrl, setImageUrl] = useState("");

  const buildRequestUrl = () => {
    return "https://dog.ceo/api/breed/" + props.name + "/images/random";
  };

  async function getImageUrl() {
    await fetch(buildRequestUrl())
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.message;
      })
      .then(setImageUrl)
      //.then(console.log(imageUrl))
      .catch(e => console.log(e.message));
  }

  useEffect(() => {
    getImageUrl();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.onPress(props.name)}
        activeOpacity={0.7}
      >
        <View style={styles.touchable}>
          <Image
            style={styles.image}
            source={{
              uri: imageUrl
            }}
          />
          {/* <Image style={styles.image} source={require("../assets/icon.png")} /> */}
          <Text style={styles.name}>{capitalize(props.name)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width
  },
  touchable: {
    height: 74,
    marginHorizontal: 5,
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#555",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.4,

    borderRadius: 5,
    elevation: 2
  },
  name: {
    fontSize: 25,
    marginLeft: 10
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 3,
    marginTop: 2
  }
});

export default BreedItem;
