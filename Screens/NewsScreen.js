import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "../api/Context";
import Carousel from "react-native-snap-carousel";
import SingleNews from "../components/SingleNews";

const NewsScreen = () => {
  const [activeIndex, setActiveIndex] = useState();
  const {
    news: { articles },
  } = useContext(NewsContext);
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          layout={"stack"}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={(item, index) => <SingleNews item={item} index={index} />}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: "black",
    transform: [{ scaleY: -1 }],
  },
});
export default NewsScreen;
