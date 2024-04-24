import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
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
      <Text style={{ ...styles.center, color: 'white'}}>
        {index ? "All News" : "Discover"}
      </Text>
      {index ? (
        <TouchableOpacity style={styles.right}>
          <Text style={styles.text}>
            <AntDesign name="reload1" size={24} color="#007fff" />
          </Text>
        </TouchableOpacity>
      ): (
        <TouchableOpacity style={styles.right}>
          <Text style={{...styles.text, color:'white'}}>All News
          </Text>
          <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
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
  right: {
    alignItems: "flex-end",
    width: 80
  },
  text: {
    fontSize: 16,
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "700"
  }
});

export default TopNavigation;
