import React, { useState } from "react";
import styled from "styled-components/native";
import { LineChart } from "react-native-chart-kit";
import { Circle } from "react-native-svg";

// custom components
import { colors } from "../colors";
import SmallText from "../Texts/SmallText";

const BalanceView = styled.View`
  align-items: center;
  background-color: ${colors.graylight};
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

const SmallBox = styled.View`
  height: 35px;
  width: 75px;
  background-color: ${colors.tertiary};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const chartConfig = {
  backgroundGradientFrom: colors.tertiaryLight,
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: colors.tertiary,
  backgroundGradientToOpacity: 0,
  backgroundColor: colors.primary,
  fillShadowGradient: colors.tertiary,
  fillShadowGradientOpacity: 0.4,
  color: (opacity = 1) => `rgba(156, 163, 175, ${opacity})`,
  useShadowColorFromDataset: false,
  style: {
    marginRight: 39,
    borderRadius: 26,
  },
};

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      data: [3500, 2400, 4900, 6482, 4700, 2800, 3900],
      color: () => colors.tertiary,
      strokeWidth: 4,
    },
  ],
};

const BalanceChart = () => {
  const [currentDot, setCurrentDot] = useState(3);

  return (
    <BalanceView>
      <LineChart
        data={data}
        width={screenWidth + screenWidth * 0.2}
        height={350}
        verticalLabelRotation={0}
        withHorizontalLines={false}
        withHorizontalLabels={false}
        fromZero={true}
        chartConfig={chartConfig}
        bezier
        style={{
          marginTop: 10,
          paddingTop: 35,
        }}
        renderDotContent={({ x, y, index, indexData }) => {
          if (index === currentDot) {
            const length = data.datasets[0].data.length;
            let left;

            switch (index) {
              case 0:
                left = x - 5;
                break;
              case length - 1:
                left = x - 70;
                break;
              default:
                left = x - 40;
            }

            return (
              <>
                <SmallBox style={{ left: left, top: y - 55 }}>
                  <SmallText
                    textStyles={{ color: colors.white, fontWeight: "bold" }}
                  >
                    ${indexData}
                  </SmallText>
                </SmallBox>
                <Circle
                  key={Math.random()}
                  cx={x}
                  cy={y}
                  r="13"
                  fill={colors.tertiary}
                  fillOpacity={1}
                  stroke="#fff"
                  strokeWidth={5}
                />
              </>
            );
          } else {
            return (
              <Circle
                key={Math.random()}
                cx={x}
                cy={y}
                r="13"
                fill={colors.tertiary}
                fillOpacity={0.1}
                stroke="#fff"
                strokeWidth={5}
                onPress={() => {
                  setCurrentDot(index);
                }}
                strokeOpacity={0}
              />
            );
          }
        }}
      />
    </BalanceView>
  );
};

export default BalanceChart;
