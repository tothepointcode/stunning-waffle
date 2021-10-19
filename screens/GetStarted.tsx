import React from "react";
import { Text } from "react-native";

// components
import { Container } from "../components/shared";
import RegularButton from "../components/RegularButton";
import styled from "styled-components/native";
import { colors } from "../components/colors";

const GetStartedContainer = styled(Container)`
  justify-content: flex-end;
  background-color: ${colors.secondary};
`;

const GetStarted = () => {
  return (
    <GetStartedContainer>
      <Text>Get Started</Text>
      <RegularButton>Get Started</RegularButton>
    </GetStartedContainer>
  );
};

export default GetStarted;
