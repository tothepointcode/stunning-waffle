import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

// custom components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

interface GreetingsProps {
  mainTextStyles?: any;
  mainText: string;
  subTextStyles?: any;
  subText: string;
}

const Greetings = (props: GreetingsProps) => {
  return (
    <StyledView>
      <RegularText
        textStyles={{
          color: colors.secondary,
          fontSize: 22,
          ...props.mainTextStyles,
        }}
      >
        {props.mainText}
      </RegularText>
      <SmallText
        textStyles={{
          color: colors.graydark,
          ...props.subTextStyles,
        }}
      >
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default Greetings;
