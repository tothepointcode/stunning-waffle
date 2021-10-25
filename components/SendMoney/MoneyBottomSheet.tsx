import * as React from "react";
import BottomSheet from "reanimated-bottom-sheet";

import styled from "styled-components/native";

// components
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import SendMoneyItem from "./SendMoneyItem";
import Portrait1 from "./../../assets/portraits/1.jpg";
import Portrait2 from "./../../assets/portraits/2.jpg";
import Portrait3 from "./../../assets/portraits/3.jpg";

const TransactionSectionBackground = styled.View`
  width: 100%;
  padding-top: 15px;
  background-color: ${colors.white};
`;

const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-horizontal: 25px;
`;

const TransactionList = styled.FlatList`
  width: 100%;
  flex: auto;
  min-height: 80%;
  padding-horizontal: 25px;
`;

const TextButton = styled.TouchableOpacity``;

export default function MoneyBottomSheet() {
  const renderContent = () => {
    return (
      <TransactionSectionBackground>
        <TransactionRow style={{ marginBottom: 25 }}>
          <RegularText textStyles={{ fontSize: 19, color: colors.secondary }}>
            Send money to
          </RegularText>
          <TextButton onPress={() => alert("Add")}>
            <SmallText
              textStyles={{ fontWeight: "bold", color: colors.tertiary }}
            >
              +Add
            </SmallText>
          </TextButton>
        </TransactionRow>

        <TransactionList
          data={[
            {
              id: 1,
              amount: "2450.56",
              name: "Coby Andoh",
              background: colors.tertiary,
              img: Portrait1,
            },
            {
              id: 2,
              amount: "4450.56",
              name: "Harleen Scot",
              background: colors.primary,
              img: Portrait2,
            },
            {
              id: 3,
              amount: "6250.56",
              name: "James Corbyn",
              background: colors.accent,
              img: Portrait3,
            },
          ]}
          contentContainerStyle={{
            alignItems: "flex-start",
          }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any) => item.id.toString()}
          numColumns={3}
          renderItem={({ item }: any) => (
            <SendMoneyItem
              amount={item.amount}
              name={item.name}
              img={item.img}
              background={item.background}
            />
          )}
        />
      </TransactionSectionBackground>
    );
  };

  const sheetRef = React.useRef<BottomSheet>(null);

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[240, 240, 85]}
        borderRadius={25}
        initialSnap={2}
        renderContent={renderContent}
        enabledContentTapInteraction={false}
      />
    </>
  );
}
