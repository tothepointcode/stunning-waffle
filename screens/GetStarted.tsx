import React from "react";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import RegularButton from "../components/Buttons/RegularButton";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";

const GetStartedContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1 1 auto;
  max-height: 55%;
`;
const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1 1 auto;
  justify-content: flex-end;
`;

const GetStarted = () => {
  return (
    <GetStartedContainer>
      <TopSection>
        <TopImage source={require("./../assets/bgs/background_v1.png")} />
      </TopSection>
      <BottomSection>
        <BigText textStyles={{ width: "70%" }}>
          Best way to track your money
        </BigText>
        <SmallText textStyles={{ width: "70%" }}>
          Best payment method, connects your money to your friends, family.
        </SmallText>
        <RegularButton>Get Started</RegularButton>
      </BottomSection>
    </GetStartedContainer>
  );
};

export default GetStarted;
