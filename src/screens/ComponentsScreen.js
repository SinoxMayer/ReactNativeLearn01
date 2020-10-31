import React from "react";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    const greeting = 'Selamlar!';
    const numbers = ['sdfa','wrtwe'];
    const jsxElement =  <Text style={styles.textStyle}>Test Test </Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Merhaba buda app in ilk adımı </Text>
      <Text>{greeting}</Text>
      <Text>{numbers[1]}</Text>
  <Text>{jsxElement}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
  },
});

export default ComponentsScreen;
