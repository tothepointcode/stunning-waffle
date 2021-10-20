import React from "react";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import RegularButton from "../components/Buttons/RegularButton";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";

const WelcomeContainer = styled(Container)`
  background-color: ${colors.gray};
  width: 100%;
  height: 100%;
`;

const Welcome = () => {
  return (<WelcomeContainer>
    
  </WelcomeContainer>);
};

export default Welcome;
