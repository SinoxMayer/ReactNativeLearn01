import React from "react";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";

const HomeWorkScreen = () => {
  const myName = "Arda";

  return (
    <View>
      <Text style={styles.textStyleForHeader}>
        Gettin started with react native
      </Text>
      <Text style={styles.textStyleForNormal}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleForHeader: {
    fontSize: 35,
  },
  textStyleForNormal: {
    fontSize: 20,
  },
});

export default HomeWorkScreen;
