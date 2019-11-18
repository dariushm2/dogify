import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

const BreedImageGallery = props => {
  const name = props.navigation.state.params.name;

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
      .then(() => console.log("size: " + imageUrls))
      .catch(e => console.log(e.message));
  }

  useEffect(() => {
    getImageUrls();
  }, []);

  const navigateToImagePager = currentImage => {
    const { navigate } = props.navigation;
    navigate("ImagePager", {
      currentImage: currentImage,
      allImages: imageUrls
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={false}
        numColumns={4}
        data={imageUrls}
        keyExtractor={item => item.id.toString()}
        renderItem={itemData => (
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigateToImagePager(itemData.item)}
          >
            <Image style={styles.image} source={{ uri: itemData.item.url }} />
          </TouchableOpacity>
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
