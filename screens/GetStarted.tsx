import React from "react";
import { Text } from "react-native";

// components
import { Container } from "../components/shared";
import RegularButton from "../components/RegularButton";
import styled from "styled-components/native";

const Cont = styled.View``;

const GetStarted = () => {
  return (
    <Container>
      <Text>Get Started</Text>
      <RegularButton>Get Started</RegularButton>
    </Container>
  );
};

export default GetStarted;
