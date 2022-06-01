import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import Text from "../components/text/text";
import { typography } from "../theme/typography";
import { EvilIcons } from "@expo/vector-icons";
import MyButton from "../components/button/button";

export default function Details() {
  return (
    <>
      <View>
        <Image
          source={{
            uri: "https://i.ibb.co/KNcRtDN/Media.png",
          }}
          style={{ height: 300, width: "100%" }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.innerContent}>
          <Text preset="h1">Boston Lettuce</Text>
        </View>
        <View style={styles.priceContent}>
          <Text preset="h2" style={{ marginRight: 8 }}>
            1.10
          </Text>
          <Text preset="h3" style={{ fontSize: 20 }}>
            € / piece
          </Text>
        </View>
        <View style={styles.weightContainer}>
          <Text style={{ color: colors.green }}>~ 150 gr / piece</Text>
        </View>
        <View>
          <Text preset="h4" style={styles.title}>
            Spain
          </Text>
          <Text style={styles.content}>
            Lettuce is an annual plant of the daisy family, Asteraceae. It is
            most often grown as a leaf vegetable, but sometimes for its stem and
            seeds. Lettuce is most often used for salads, although it is also
            seen in other kinds of food, such as soups, sandwiches and wraps; it
            can also be grilled.
          </Text>
        </View>

        {/* Button */}
        <View style={styles.btnContainer}>
          <View style={styles.btnFavorite}>
            <MyButton
              buttonStyle={{
                paddingHorizontal: 25,
                borderWidth: 1,
                borderColor: colors.grey,
              }}
              buttonColor={colors.white}
            >
              <EvilIcons
                name="heart"
                size={28}
                style={{ color: colors.grey }}
              />
            </MyButton>
          </View>
          <View style={styles.btnAddToCart}>
            <MyButton buttonStyle={{ paddingHorizontal: 90, fontSize: 60 }}>
              <EvilIcons
                name="cart"
                size={26}
                style={{ color: colors.white }}
              />
              <Text style={{ color: colors.white, fontSize: 18 }}>
                &nbsp; Add To Cart
              </Text>
            </MyButton>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    width: "100%",
    marginTop: -30,
    paddingHorizontal: 20,
  },

  innerContent: {
    flexDirection: "row",
    marginTop: 40,
  },
  priceContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 5,
  },
  weightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: colors.deepBlue,
    fontFamily: typography.bold,
    marginTop: 30,
    marginBottom: 10,
  },
  content: {
    lineHeight: 25,
    textAlign: "justify",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 0,
    marginTop: 50,
  },
  btnAddToCart: {},
});
