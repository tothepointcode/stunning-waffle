import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionAvi from "../Transactions/TransactionAvi";

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

const SendMoneyContainer = styled.View`
    height: 100px;
`;

const RightView = styled.View``;

interface SendMoneyProps {
  img: any;
  name: string;
  amount: string;
  background: any;
}

const TransactionItem = (props: SendMoneyProps) => {
  return (
    <SendMoneyContainer style={{backgroundColor: props.background}}>

      
      <SmallText
        textStyles={{
          textAlign: "left",
          color: colors.graydark,
        }}
      >
        {props.name}
      </SmallText>
      <RegularText
        textStyles={{
          fontSize: 25,
          color: colors.secondary,
          textAlign: "left",
        }}
      >
        {props.amount}
      </RegularText>
    </SendMoneyContainer>
  );
};

export default TransactionItem;
