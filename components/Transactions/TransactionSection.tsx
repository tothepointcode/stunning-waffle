import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionItem from "./TransactionItem";

const TransactionSectionBackground = styled.View`
  width: 100%;
  padding-horizontal: 25px;
  padding-top: 5px;
  flex: 2;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
`;

const TransactionSection = () => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 20, color: colors.secondary }}>
          Transaction
        </RegularText>
        <SmallText textStyles={{ color: colors.secondary }}>
          Recent{" "}
          <Ionicons name="caret-down" size={14} color={colors.graydark} />
        </SmallText>
      </TransactionRow>

      <TransactionList
        data={[
          {
            id: 1,
            amount: "-$86.00",
            date: "14 Sep 2021",
            title: "Taxi",
            subtitle: "Uber car",
            art: {
              background: colors.primary,
              icon: "car",
            },
          },
          {
            id: 2,
            amount: "-$286.00",
            date: "14 Sep 2021",
            title: "Shopping",
            subtitle: "Ali express",
            art: {
              background: colors.tertiary,
              icon: "cart",
            },
          },
          {
            id: 3,
            amount: "-$586.00",
            date: "14 Aug 2021",
            title: "Travel",
            subtitle: "Emirates",
            art: {
              background: colors.accent,
              icon: "airplane",
            },
          },
        ]}
        contentContainerStyle={{
          paddingBottom: 25,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }: any) => (
          <TransactionItem
            amount={item.amount}
            date={item.date}
            title={item.title}
            subtitle={item.subtitle}
            art={item.art}
          />
        )}
      />
    </TransactionSectionBackground>
  );
};

export default TransactionSection;
