import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";

export default function Logo() {
  return (
    <View style={styles.logo}>
      <Image source={require("../../../assets/images/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
    marginBottom: "30%",
    backgroundColor: colors.liteGreen,
    padding: 30,
    width: 20,
    height: 20,
    borderRadius: 50,
    marginLeft: 20,
  },
});
