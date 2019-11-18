import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import BreedItem from "./BreedItem";

const BreedsList = props => {
  const [breedsList, setBreedsList] = useState([]);

  async function getBreedsList() {
    await fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.message;
      })
      .then(array => {
        return Object.keys(array)
          .map(function(key) {
            return [key, array[key]];
            //return [{ id: key, name: array[key] }];
          })
          .flat(2)
          .map(function(key, index) {
            return { id: index, name: key };
          });
      })
      //.then(array => console.log(array));
      .then(setBreedsList);
    //.then(console.log(breedsList));
  }

  useEffect(() => {
    getBreedsList();
  }, []);

  const navToBreedImageGallery = name => {
    console.log("name is: " + name);
    props.navigation.setParams({ title: name });
    const { navigate } = props.navigation;
    navigate("BreedImageGallery", { name: name });
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={breedsList}
        keyExtractor={item => item.id.toString()}
        renderItem={itemData => (
          <BreedItem
            onPress={navToBreedImageGallery}
            name={itemData.item.name}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default BreedsList;
