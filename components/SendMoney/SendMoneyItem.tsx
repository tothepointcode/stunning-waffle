import React from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import Profile from "../Headers/Profile";
import { ScreenWidth } from "../shared";

const SendMoneyContainer = styled.TouchableHighlight`
  height: 130px;
  width: ${ScreenWidth * 0.27}px;
  padding: 10px;
  border-radius: 15px;
  justify-content: space-around;
  margin: 0px 10px 10px 0px;
`;

interface SendMoneyProps {
  img: any;
  name: string;
  amount: string;
  background: any;
}

const TransactionItem = (props: SendMoneyProps) => {
  return (
    <SendMoneyContainer
      underlayColor={colors.secondary}
      style={{ backgroundColor: props.background }}
      onPress={() => {
        alert("Send Money!");
      }}
    >
      <>
        <Profile img={props.img} imgContainerStyle={{ marginBottom: 10 }} />

        <SmallText
          textStyles={{
            textAlign: "left",
            color: colors.white,
            fontSize: 12,
          }}
        >
          {props.name}
        </SmallText>
        <RegularText
          textStyles={{
            color: colors.white,
            textAlign: "left",
            fontSize: 13,
          }}
        >
          {props.amount}
        </RegularText>
      </>
    </SendMoneyContainer>
  );
};

export default TransactionItem;
