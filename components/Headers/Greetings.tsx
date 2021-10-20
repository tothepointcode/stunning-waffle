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
  flex: 1 1 auto;
`;

const MainText = styled(RegularText)`
  color: ${colors.secondary};
`;

const SubText = styled(SmallText)`
  color: ${colors.secondary};
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
      <MainText textStyles={{ ...props.mainTextStyles }}>
        {props.mainText}
      </MainText>
      <SubText textStyles={{ ...props.subTextStyles }}>{props.subText}</SubText>
    </StyledView>
  );
};

export default Greetings;
