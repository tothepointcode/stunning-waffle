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

const RightView = styled.View``;

interface TransactionItemProps {
  title: string;
  subtitle: string;
  amount: string;
  date: string;
  art: {
    icon: string;
    background: any;
  };
}

const TransactionItem = (props: TransactionItemProps) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi
          background={props.art.background}
          icon={props.art.icon}
        />
        <View style={{ marginLeft: 10 }}>
          <RegularText
            textStyles={{
              fontSize: 25,
              color: colors.secondary,
              textAlign: "left",
            }}
          >
            {props.title}
          </RegularText>
          <SmallText
            textStyles={{
              textAlign: "left",
              color: colors.graydark,
            }}
          >
            {props.subtitle}
          </SmallText>
        </View>
      </LeftView>

      <RightView>
        <RegularText
          textStyles={{
            fontSize: 25,
            color: colors.secondary,
            textAlign: "right",
          }}
        >
          {props.amount}
        </RegularText>
        <SmallText
          textStyles={{
            textAlign: "right",
            color: colors.graydark,
          }}
        >
          {props.date}
        </SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;