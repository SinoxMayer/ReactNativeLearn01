import React from "react";
import { Text, StyleSheet, View, Button , TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Arda KAPTAN</Text>
      <Button
        onPress={() => navigation.navigate('Components')  }
        title="Go To Components Demo"
      />

      <Button
      title="Go to List"
      onPress={() => navigation.navigate('List')}
      />

      <Button
      title = "Image Screen"
      onPress = {() => navigation.navigate('ImgScrn')}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Components')}>
        <Text>Go to list demo</Text>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
