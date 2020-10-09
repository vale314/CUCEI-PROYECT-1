import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import CarouselItem from "./carouselItem";

const { width, height } = Dimensions.get("window");
var flatList;

// function infiniteScroll(dataList) {
//   const numberOfData = dataList.length;
//   let scrollValue = 0,
//     scrolled = 0;

//   setInterval(function () {
//     scrolled++;
//     if (scrolled < numberOfData) scrollValue = scrollValue + width;
//     else {
//       scrollValue = 0;
//       scrolled = 0;
//     }

//     if (flatList.current) {
//       flatList.current.scrollToOffset({
//         animated: true,
//         offset: scrollValue,
//       });
//     }
//   }, 3000);
// }

const Carousel = ({ data }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    //infiniteScroll(dataList);
  });

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          ref={(flatListAux) => {
            flatList = flatListAux;
          }}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        />

        <View style={styles.dotView}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: "#595959",
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  console.log("Please provide Images");
  return null;
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
    top: 0,
    position: "absolute",
    top: height / 3.2,
    right: width / 2.6,
  },
});

export default Carousel;
