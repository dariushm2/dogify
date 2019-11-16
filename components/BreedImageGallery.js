import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Image, Dimensions } from "react-native";

const BreedImageGallery = props => {
  const navigationOptions = ({ navigation }) => {
    title: props.name;
  };

  const name = props.navigation.state.params.name;
  console.log("Hey");

  const myData = [
    { key: "one" },
    { key: "two" },
    { key: "three" },
    { key: "four" },
    { key: "five" },
    { key: "six" },
    { key: "seven" },
    { key: "eight" },
    { key: "nine" }
  ];

  const [imageUrls, setImageUrls] = useState([]);

  const buildRequestUrl = () => {
    return "https://dog.ceo/api/breed/" + name + "/images";
  };

  async function getImageUrls() {
    await fetch(buildRequestUrl())
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.message;
      })
      .then(array => {
        return array.map(function(key, index) {
          return { id: index, url: key };
        });
      })
      .then(setImageUrls)
      .then(() => console.log(imageUrls))
      .catch(e => console.log(e.message));
  }

  useEffect(() => {
    getImageUrls();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        numColumns={4}
        data={imageUrls}
        keyExtractor={item => item.id.toString()}
        renderItem={itemData => (
          <View style={styles.box}>
            <Image style={styles.image} source={{ uri: itemData.item.url }} />
          </View>
        )}
      />
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: "flex-start"
  },
  box: {
    flex: 1,
    height: 100,
    backgroundColor: "#CCC",
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
BreedImageGallery.navigationOptions = screenProps => ({
  title: capitalize(screenProps.navigation.getParam("name"))
});

export default BreedImageGallery;
