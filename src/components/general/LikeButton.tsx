import {
  Animated,
  Easing,
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
} from "react-native";
import React, { useRef, useState } from "react";
import SvgIcon from "../Home/SvgIcon";
import { heartIcon, heartIconFilled } from "../../../data/SvgFiles";

export type LikeButtonProps={
  size:number,
  onPressColor:string,
  color:string,
  onPress:()=>void,
  style?:StyleProp<TextStyle>
}

const LikeButton = ({size,onPressColor,color,onPress}:LikeButtonProps) => {
  const [pressed, setPressed] = useState(false);
  const scaleMain= useRef(new Animated.Value(0)).current;
  const fadeOne = useRef(new Animated.Value(0)).current;
  const fadeTwo = useRef(new Animated.Value(0)).current;
  const fadeThree = useRef(new Animated.Value(0)).current;
  const translateRight = useRef(new Animated.Value(0)).current;
  const translateLeft = useRef(new Animated.Value(0)).current;
  const translateup = useRef(new Animated.Value(0)).current;

  function showAnimation() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateRight, {
          toValue: size,
          easing: Easing.cubic,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(translateLeft, {
          toValue: -size,
          easing: Easing.cubic,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(translateup, {
          toValue: -size,
          easing: Easing.cubic,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(scaleMain, {
            toValue: 1.6,
            easing: Easing.cubic,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(scaleMain, {
            toValue: 1.2,
            easing: Easing.cubic,
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.parallel([
            Animated.timing(fadeOne, {
              toValue: 0.8,
              easing: Easing.cubic,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(fadeTwo, {
              toValue: 0.5,
              easing: Easing.cubic,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(fadeThree, {
              toValue: 0.3,
              easing: Easing.cubic,
              duration: 300,
              useNativeDriver: true,
            }),
          ]),
          Animated.parallel([
            Animated.timing(fadeOne, {
              toValue: 0,
              easing: Easing.cubic,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(fadeTwo, {
              toValue: 0,
              easing: Easing.cubic,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(fadeThree, {
              toValue: 0,
              easing: Easing.cubic,
              duration: 300,
              useNativeDriver: true,
            }),
          ]),
        ]),
      ]),
    ]).start();
  }

  function resetAnimation() {
    fadeOne.setValue(0);
    fadeTwo.setValue(0);
    fadeThree.setValue(0);
    translateLeft.setValue(0);
    translateRight.setValue(0);
    translateup.setValue(0);
    scaleMain.setValue(0);
  }
  return (
    <Pressable
      onPress={() => {
        if (!pressed){
          showAnimation();
          onPress()
        }
        else{
          resetAnimation();
        } 
        setPressed(!pressed);
      }}
    >
      {pressed ? (
        <Animated.View style={{transform:[{scale:scaleMain}]}}>
          <SvgIcon
          height={size}
          pathName={heartIconFilled}
          width={size}
          color={[onPressColor]}
          stroke={""}
          strokeWidth={0}
        />
        </Animated.View>
        
      ) : (
        <SvgIcon
          height={size}
          pathName={heartIconFilled}
          width={size}
          color={["black"]}
          stroke={"white"}
          strokeWidth={2}
        />
      )}
      <Animated.View
        style={{
          opacity: fadeOne,
          transform: [{ translateY: translateup }],
          position: "absolute",
        }}
      >
        <SvgIcon
          height={size}
          pathName={heartIconFilled}
          width={size}
          color={[onPressColor]}
          stroke={""}
          strokeWidth={0}
        />
      </Animated.View>
      <Animated.View
        style={{
          opacity: fadeTwo,
          transform: [
            { translateY: translateup },
            { translateX: translateLeft },
            {rotate:'-30deg'}
          ],
          position: "absolute",
        }}
      >
        <SvgIcon
          height={size}
          pathName={heartIconFilled}
          width={size}
          color={[onPressColor]}
          stroke={""}
          strokeWidth={0}
        />
      </Animated.View>
      <Animated.View
        style={{
          opacity: fadeThree,
          transform: [
            { translateY: translateup },
            { translateX: translateRight },
            {rotate:'30deg'}
          ],
          position: "absolute",
        }}
      >
        <SvgIcon
          height={size}
          pathName={heartIconFilled}
          width={size}
          color={[onPressColor]}
          stroke={""}
          strokeWidth={0}
        />
      </Animated.View>
    </Pressable>
  );
};

export default LikeButton;

const styles = StyleSheet.create({});
