import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";

const StyledText = styled.Text`
  font-size: 16px;
  color: ${colors.gray};
  margin-bottom: 20px;
  text-align: left;
`;

const SmallText = (props: { textStyles?: any; children: React.ReactNode }) => {
  return (
    <StyledText style={{ ...props.textStyles }}>{props.children}</StyledText>
  );
};

export default SmallText;
