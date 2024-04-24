import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import React from "react";

const TopNavigation = ({ index, setIndex }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text style={{ ...styles.text, color: "lightgrey" }}>
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="#007FFF"
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.left} onPress={()=> setIndex(index === 0 ? 1 : 0)}>
          <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
          <Text style={{ ...styles.text, color: "lightgrey" }}>Discover</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
});

export default TopNavigation;
