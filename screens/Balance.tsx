import React, { useState } from "react";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import BalanceDial from "../components/Balance/BalanceDial";
import Filter from "../components/Balance/Filter";
import BalanceChart from "../components/Balance/BalanceChart";

const BalanceContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  height: 100%;
  padding-top: 25px;
`;

const pileOfData = [
  {
    labels: ["8:00", "11:00", "14:00", "18:00", "20:00"],
    datasets: [
      {
        data: [50, 10, 40, 82, 100, 50, 100],
        color: () => colors.tertiary,
        strokeWidth: 4,
      },
    ],
  },
  {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [500, 400, 900, 682, 1000, 50, 300],
        color: () => colors.tertiary,
        strokeWidth: 4,
      },
    ],
  },
  {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [3500, 2400, 4900, 6482, 4700, 2800, 3900],
        color: () => colors.tertiary,
        strokeWidth: 4,
      },
    ],
  },
  {
    labels: ["2018", "2019", "2020", "2021"],
    datasets: [
      {
        data: [35000, 13500, 12400, 24900],
        color: () => colors.tertiary,
        strokeWidth: 4,
      },
    ],
  },
];

const Balance = () => {
  const [activeFilter, setActiveFilter] = useState(2);
  return (
    <BalanceContainer>
      <BalanceDial balance={20000} />
      <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <BalanceChart data={pileOfData[activeFilter]} />
    </BalanceContainer>
  );
};

export default Balance;
