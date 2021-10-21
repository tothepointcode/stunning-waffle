import React from "react";
import { View, Image } from "react-native";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionAvi from "../Transactions/TransactionAvi";
import Profile from "../Headers/Profile";

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
  height: 160px;
  width: 150px;
  padding: 15px;
  border-radius: 25px;
  flex: 1;
  justify-content: space-around;
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
    <SendMoneyContainer style={{ backgroundColor: props.background }}>
      <Profile
        img={props.img}
        imgStyle={{ width: 60, height: 60, marginBottom: 10 }}
      />

      <SmallText
        textStyles={{
          textAlign: "left",
          color: colors.white,
        }}
      >
        {props.name}
      </SmallText>
      <RegularText
        textStyles={{
          color: colors.white,
          textAlign: "left",
        }}
      >
        {props.amount}
      </RegularText>
    </SendMoneyContainer>
  );
};

export default TransactionItem;
