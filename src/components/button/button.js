import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

export default function MyButton({
  children,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
}) {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor || colors.green,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.title,
          ...textStyle,
          color: titleColor || colors.white,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: typography.semiBold,
  },
});
