import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 50px;
  font-weight: 700;
  color: ${colors.white};
  margin-vertical: 20px;
`;

const BigText = (props: { textStyles?: any; children: React.ReactNode }) => {
  return (
    <StyledText style={{ ...props.textStyles }}>{props.children}</StyledText>
  );
};

export default BigText;
