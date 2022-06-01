import { View, StyleSheet } from "react-native";
import React from "react";
import Logo from "../components/shared/logo";
import { colors } from "../theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import SingleItem from "../components/home/singleItem";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Logo />
        <SingleItem />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.violet,
    color: "#000",
  },
});
