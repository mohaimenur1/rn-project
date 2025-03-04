import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

import iceCoffeeImg from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={iceCoffeeImg}
      >
        <Text style={styles.text}>Coffee Shop</Text>
        <Link style={styles.link} href="/explore">
          Explore
        </Link>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    // resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginBottom: 20,
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 4,
  },
});
