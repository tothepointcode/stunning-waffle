import React from "react";
import styled from "styled-components/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

//colors
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const BalanceView = styled.View`
  align-items: center;
  background-color: ${colors.graylight};
  padding: 7px;
  border-radius: 500px;
  border: 3px solid ${colors.accentLight};
  justify-content: center;
  marginBottom: 25px;
`;

const BalanceDial = (props: { balance: number | string }) => {
  return (
    <BalanceView>
      <AnimatedCircularProgress
        size={250}
        width={8}
        fill={35}
        tintColor={colors.primaryLight}
        backgroundColor={colors.tertiaryLight}
        backgroundWidth={25}
        childrenContainerStyle={{
          backgroundColor: colors.white,
        }}
        tintTransparency={true}
        rotation={45}
        lineCap="round"
        style={{}}
      >
        {(fill) => (
          <>
            <SmallText textStyles={{ color: colors.secondary, marginBottom: 5 }}>
              Total Balance
            </SmallText>
            <RegularText textStyles={{ color: colors.secondary, fontSize: 28 }}>
              ${props.balance}
            </RegularText>
          </>
        )}
      </AnimatedCircularProgress>
    </BalanceView>
  );
};

export default BalanceDial;
