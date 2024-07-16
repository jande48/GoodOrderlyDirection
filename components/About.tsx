import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function About(props: any) {
  const { navigation } = props;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.text}>
        An AI chatbot can serve as a valuable co-sponsor in a 12-step recovery
        program, enhancing the support provided by a human sponsor. By being
        available 24/7, the chatbot ensures that individuals in recovery receive
        consistent support whenever they need it, complementing the periodic
        guidance from their human sponsor. The chatbot can facilitate daily
        check-ins, providing users with prompts to reflect on their progress,
        challenges, and feelings. This can help them prepare for more in-depth
        discussions with their human sponsor. Furthermore, the chatbot can offer
        instant access to resources and information relevant to each step of the
        program, aiding understanding and implementation. It can also provide
        motivational quotes and affirmations to boost morale and resolve,
        especially during tough times. For more interactive learning, the
        chatbot could simulate scenarios where users can practice skills such as
        setting boundaries or managing cravings, thus reinforcing the lessons
        learned in recovery meetings and from their sponsor. This hybrid
        approach of AI and human support aims to create a more robust framework
        for recovery, ensuring no one feels alone in their journey.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f8ff",
    marginTop: 0,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#555",
    textAlign: "left",
    lineHeight: 24,
  },
});
