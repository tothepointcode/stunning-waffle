import React from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionItem from "./TransactionItem";

const TransactionSectionBackground = styled.View`
  display: flex;
  width: 100%;
  padding: 25px;
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TransactionList = styled.FlatList`
  width: 100%;
  height: 265px;
`;

const TransactionSection = () => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={{ marginBottom: 25 }}>
        <RegularText textStyles={{ fontSize: 25, color: colors.secondary }}>
          Transaction
        </RegularText>
        <SmallText textStyles={{ fontWeight: "bold", color: colors.secondary }}>
          Recent
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
        keyExtractor={(item: any) => item.id}
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
