import React from "react";
import styled from "styled-components/native";

// icons
import { Ionicons } from "@expo/vector-icons";

// custom components
import { colors } from "../colors";

const StyledView = styled.View`
  display: flex;
  height: 45px;
  width: 45px;
  border-radius: 10px;
  background-color: ${colors.tertiary};
  justify-content: center;
  align-items: center;
`;

const TransactionAvi = (props: { icon: any; background: any }) => {
  return (
    <StyledView style={{ backgroundColor: props.background }}>
      <Ionicons name={props.icon} size={25} color={colors.white} />
    </StyledView>
  );
};

export default TransactionAvi;
