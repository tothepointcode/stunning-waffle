import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

// custom components
import { colors } from "../colors";
import BigText from "../Texts/BigText";
import SmallText from "../Texts/SmallText";

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const MainText = styled(BigText)`
  font-size: 50px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 25px;
  text-align: left;
`;

const SubText = styled(SmallText)`
  font-size: 50px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 25px;
  text-align: left;
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
      <MainText style={{ ...props.mainTextStyles }}>{props.mainText}</MainText>
      <SubText style={{ ...props.subTextStyles }}>{props.subText}</SubText>
    </StyledView>
  );
};

export default Greetings;
