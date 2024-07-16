import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Overeating() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Overeating</Text>
      <Text style={styles.text}>
        A chatbot can be an effective tool for assisting individuals in managing
        overeating through meal planning and following a 12-step program, such
        as Overeaters Anonymous (OA). Here's how: 1. **Meal Planning
        Assistance**: The chatbot can help users create personalized meal plans
        by taking into account their dietary preferences, nutritional needs, and
        specific goals like weight management or balanced eating. It can suggest
        healthy recipes, portion sizes, and meal timing, and even provide
        reminders to eat according to the plan, fostering discipline and
        structure. 2. **Educational Resource**: The chatbot can offer
        information on the principles of healthy eating, the effects of
        overeating, and the psychological triggers that lead to it. This
        educational support can empower users with the knowledge needed to make
        healthier choices. 3. **Step Guidance and Tracking**: Each step in a
        12-step program can be explained and tracked through the chatbot. For
        instance, the chatbot can guide a user through the process of admitting
        powerlessness over food (Step One), finding a greater power that can
        give strength (Step Two), and learning to make conscious decisions to
        improve one’s health (Step Three). 4. **Emotional Support**: Chatbots
        can provide a safe space for users to express feelings about their
        eating habits and progress without judgment. It can offer motivational
        messages and affirmations to help users remain committed to their
        recovery journey. 5. **Community Connection**: The chatbot can connect
        users with online meetings or virtual support groups, helping them feel
        supported and less isolated. It can facilitate engagement with a
        community of individuals who share similar challenges and goals. By
        integrating these functionalities, a chatbot can significantly support
        individuals struggling with overeating as they work through their meal
        planning and 12-step recovery program.
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
