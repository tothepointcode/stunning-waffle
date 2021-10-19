import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import RegularButton from "../components/Buttons/RegularButton";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";

const GetStartedContainer = styled(Container)`
  justify-content: flex-end;
  background-color: ${colors.secondary};
  align-items: flex-start;
`;

const GetStarted = () => {
  return (
    <GetStartedContainer>
      <BigText textStyles={{ width: "70%" }}>
        Best way to track your money
      </BigText>
      <SmallText textStyles={{ width: "70%" }}>
        Best payment method, connects your money to your friends, family.
      </SmallText>
      <RegularButton>Get Started</RegularButton>
    </GetStartedContainer>
  );
};

export default GetStarted;
