import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ViewPagerAndroid } from "react-native";
//import ViewPager from "@react-native-community/viewpager";

const ImagePager = props => {
  const [imageUrl, setImageUrl] = useState({ id: 0, url: "" });
  const [imageUrls, setImageUrls] = useState([{ id: 0, url: "" }]);

  useEffect(() => {
    setImageUrl(props.navigation.state.params.currentImage);
    setImageUrls(props.navigation.state.params.allImages);
    console.log("ImagePager useEffect()");
  }, []);

  const pages = [];

  return (
    <View style={styles.container}>
      {imageUrls.map(item => {
        console.log(item.url);
        return pages.push(
          <View key={item.id.toString()}>
            <Image
              resizeMode={"contain"}
              style={styles.image}
              source={{ uri: item.url }}
            />
          </View>
        );
      })}
      <ViewPagerAndroid>{pages}</ViewPagerAndroid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

// ImagePager.navigationOptions = screenProps => ({
//   title: screenProps.navigation.getParam("imageUrls")
// });

export default ImagePager;
