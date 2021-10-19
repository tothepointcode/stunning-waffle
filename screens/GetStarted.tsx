import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import RegularButton from "../components/Buttons/RegularButton";
import BigText from "../components/Texts/BigText";



const GetStartedContainer = styled(Container)`
  justify-content: flex-end;
  background-color: ${colors.secondary};
`;

const GetStarted = () => {
  return (
    <GetStartedContainer>
      <BigText>Best way to track your money</BigText>
      <RegularButton>Get Started</RegularButton>
    </GetStartedContainer>
  );
};

export default GetStarted;
