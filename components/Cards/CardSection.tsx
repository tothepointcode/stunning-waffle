import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const CardsList = styled.FlatList`
  background-color: ${colors.primary};
  width: 100%;
  padding-left: 25px;
  flex: 1;
`;

const CardBackground = styled.ImageBackground`
  height: 250px;
  width: 350px;
  resize-mode: cover;
  background-color: ${colors.accent};
  border-radius: 25px;
  overflow: hidden;
  align-self: center;
  margin-right: 25px;
`;

const CardTouchable = styled.TouchableHighlight`
  height: 250px;
  border-radius: 25px;
`;

const TouchableView = styled.View`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 25px;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardSection = (props: { data?: object[] }) => {
  return (
    <CardsList
      data={[
        { account: "384575774483" },
        { account: "384573774483" },
        { account: "384525774483" },
      ]}
      contentContainerStyle={{
        paddingRight: 25,
      }}
      horizontal={true}
      keyExtractor={(item: any) => item.account}
      renderItem={() => (
        <CardBackground
          source={require("./../../assets/bgs/background_transparent.png")}
        >
          <CardTouchable
            underlayColor={colors.secondary}
            onPress={() => alert("Pressed!")}
          >
            <TouchableView>
              <CardRow>
                <RegularText>******4678</RegularText>
              </CardRow>
              <CardRow>
                <View>
                  <SmallText
                    textStyles={{ marginBottom: 5, color: colors.white }}
                  >
                    Total balance
                  </SmallText>
                  <RegularText>$20,000.50</RegularText>
                </View>
                <RegularText>VISA</RegularText>
              </CardRow>
            </TouchableView>
          </CardTouchable>
        </CardBackground>
      )}
    />
  );
};

export default CardSection;
