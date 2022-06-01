import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import Text from "../../components/text/text";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../theme/colors";
import Button from "../button/button";
import MyButton from "../button/button";

export default function SingleItem({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContent}>
        <View style={styles.iconContainer}>
          <Feather name="codesandbox" size={36} style={styles.icon} />
        </View>
        <Text preset="h1" style={styles.title}>
          Non-Contact {"\n"} Deliveries
        </Text>
        <Text style={styles.regularText}>
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.
        </Text>

        {/* <Pressable>
          <MyButton
            onPress={() => {
              navigation.navigate("Details");
            }}
            buttonStyle={{ marginTop: 50 }}
          >
            Order Now
          </MyButton>
        </Pressable> */}

        <Pressable
          onPress={() => {
            navigation.navigate("Details");
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text preset="h4">Hello</Text>
          </View>
        </Pressable>

        <MyButton
          buttonStyle={{ marginTop: 10 }}
          buttonColor={colors.liteGrey}
          titleColor={colors.liteViolet}
        >
          Dismiss
        </MyButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.liteGrey,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    width: "100%",
  },
  //   Icon Style
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  icon: {
    width: 80,
    height: 80,
    backgroundColor: colors.white,
    borderRadius: 50,
    textAlign: "center",
    textAlignVertical: "center",
    color: colors.deepBlue,
  },

  // Heading Style
  title: {
    paddingHorizontal: 20,
    textAlign: "center",
    marginTop: 20,
  },

  // Regular Text
  regularText: {
    marginTop: 20,
    paddingHorizontal: 30,
    textAlign: "justify",
    lineHeight: 25,
  },
});
