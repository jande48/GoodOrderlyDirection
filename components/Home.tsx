import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Icon, ChevronRightIcon, Pressable } from "@gluestack-ui/themed";

export default function Home(props: any) {
  const { navigation } = props;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Good Orderly Direction</Text>
      </View>
      <Pressable onPress={() => navigation.navigate("About")}>
        <View style={styles.aboutBox}>
          <View style={styles.titleSubtitleBox}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.subtitle}>
              We are in the process of building the most effect AI CoSponsor for
              12 step programs... below is some info on some complusive
              disorders
            </Text>
          </View>
          <Icon as={ChevronRightIcon} style={styles.iconStyle} />
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("SubstanceAbuse")}>
        <View style={styles.substanceAbuseBox}>
          <View style={styles.titleSubtitleBox}>
            <Text style={styles.title}>Substance Abuse</Text>
            <Text style={styles.subtitle}>
              Substance abuse affects about 20 million Americans, escalating
              overdose deaths and treatment demands.
            </Text>
          </View>
          <Icon as={ChevronRightIcon} style={styles.iconStyle} />
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Codependency")}>
        <View style={styles.codependencyBox}>
          <View style={styles.titleSubtitleBox}>
            <Text style={styles.title}>Codependency</Text>
            <Text style={styles.subtitle}>
              Codependency affects millions, significantly impacting
              relationships and mental health nationwide.
            </Text>
          </View>
          <Icon as={ChevronRightIcon} style={styles.iconStyle} />
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Overeating")}>
        <View style={styles.overeatingBox}>
          <View style={styles.titleSubtitleBox}>
            <Text style={styles.title}>Overeating</Text>
            <Text style={styles.subtitle}>
              Obesity and related health issues are prevalent in the United
              States, affecting over 40% of all adults
            </Text>
          </View>
          <Icon as={ChevronRightIcon} style={styles.iconStyle} />
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    //  backgroundColor: "#f9abe7",
    // padding: 20,
    alignItems: "center",
  },
  titleSubtitleBox: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 5,
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  titleBox: {
    width: "100%",
    backgroundColor: "#f9abe7",
    alignItems: "center",
  },
  overeatingBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#b5e5ff",
    padding: 15,
  },
  codependencyBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#c6c7ff",
    padding: 15,
  },
  substanceAbuseBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#d1bbf9",
    padding: 15,
  },
  aboutBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e1a9f6",
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
    textAlign: "left",
  },
  text: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
  },
});
