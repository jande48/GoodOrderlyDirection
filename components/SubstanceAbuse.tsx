import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function SubstanceAbuse() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Substance Abuse</Text>
      <Text style={styles.text}>
        An AI chatbot can be a valuable tool for newcomers to Alcoholics
        Anonymous (AA) as they naviagate the first three steps of the program.
        Firstly, in addressing Step One- Acknowledging powerlessness over
        alcohol- the chatbot can provide a non-judgemental platform for users to
        express their feelings and experiences. By encouraging open
        conversation, the AI can help individuals recognize and accept their
        situation without fear of stigma. For Step Two, which involves coming to
        believe that a power greater than oneself can restore sanity, the
        chatbot can offer educational resources and share recovery stories from
        others who have successfully followed the AA path. This can help
        reinforce the message of hope and the possibility of recovery. Lastly,
        in working Step Three- deciding to turn one's will and life over to the
        care of God as understood by the individual- the chatbot can guide users
        through reflective exerceses and provide support in exploring their
        spiritual beliefs. By facilitating access to meditation guides and
        spiritual reflections, the chatbot can assist individuals in finding a
        personal understanding of a higher power, thus supporting a critical
        component of recovery in AA.
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
