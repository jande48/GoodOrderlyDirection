import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Codependency() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Codependency</Text>
      <Text style={styles.text}>
        An AI chatbot can be a valuable resource for individuals recovering from
        codependency by providing support and resources in various ways: 1.
        **Education and Awareness**: The chatbot can educate users on
        codependency, helping them understand its signs, symptoms, and impacts.
        This knowledge is crucial for self-awareness and recognizing patterns in
        one’s behavior and relationships. 2. **Self-Reflection Prompts**:
        Through guided conversations, the chatbot can encourage self-reflection,
        helping users identify and analyze their codependent behaviors and the
        motivations behind them. Reflective exercises can also assist users in
        understanding their needs and desires separate from those of others. 3.
        **Emotional Support**: Codependents often need reassurance and
        validation, which a chatbot can provide consistently and without
        judgment. It can offer positive affirmations and coping strategies to
        help users manage their emotions and stress. 4. **Skill Building**: The
        chatbot can teach skills such as setting boundaries, assertive
        communication, and self-care—essential tools for individuals trying to
        overcome codependent traits. By practicing these skills in a safe
        environment, users can gain confidence before applying them in real-life
        interactions. 5. **Goal Setting and Tracking**: Users can set personal
        goals with the chatbot's help, such as spending time alone or pursuing a
        hobby. The chatbot can track progress, provide reminders, and celebrate
        achievements, reinforcing positive behavior changes over time. 6.
        **Resource Linking**: The chatbot can guide users to professional help,
        support groups, and educational materials if their needs exceed what the
        chatbot can provide. This ensures that users have access to
        comprehensive care and support networks. 7. **24/7 Availability**:
        Recovery from codependency can be challenging, with ups and downs that
        require continuous support. A chatbot is accessible anytime, providing
        immediate help or conversation when needed most. Through these methods,
        an AI chatbot can play a supportive role in the journey to recovery from
        codependency, helping individuals build healthier relationships with
        themselves and others.
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
