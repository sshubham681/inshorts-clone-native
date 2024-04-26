import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SingleNews = ({ item, index }) => {
  const { title, urlToImage, description, author, content, url } = item.item;
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: "windowWidth" }}
      />
      <View style={{ ...styles.description, backgroundColor: "#282c35" }}>
        <Text style={{ ...styles.title, color: "white" }}>{title}</Text>
        <Text style={{ ...styles.content, color: "white" }}>{description}</Text>
        <Text style={{ color: "white" }}>Short by: {author || "unknown"}</Text>
        <ImageBackground
          blurRadius={30}
          style={styles.footer}
          source={{ uri: urlToImage }}
        >
          <TouchableOpacity onPress={() => Linking.openURL(url)}>
            <Text>{content && `${content.slice(0, 55)}...`}</Text>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: {
    fontSize: 16,
    paddingBottom: 10,
  },
  description: {
    padding: 15,
    flex: 1,
  },
  footer: {
    height: 80,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default SingleNews;
