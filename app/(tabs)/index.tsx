import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../../components/About";
import SubstanceAbuse from "../../components/SubstanceAbuse";
import Codependency from "../../components/Codependency";
import Overeating from "../../components/Overeating";
import Home from "../../components/Home";

export default function HomeScreen() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="SubstanceAbuse" component={SubstanceAbuse} />
      <Drawer.Screen name="Codependency" component={Codependency} />
      <Drawer.Screen name="Overeating" component={Overeating} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
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
});
