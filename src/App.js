import React from "react";
import styled from "styled-components";

import BarChart from "./graphs/barChart";
import PieChart from "./graphs/pieChart";
import LineChart from "./graphs/lineChart";

const Wrapper = styled.div`
  display: grid;
  background-color: red;
  align-items: center;
  justify-items: center;

  width: ${window.innerWidth};
`;
//width: 100 %;
// width: calc(100% - 20px);
// // width: ${props => props.width};
// width: ${window.innerWidth}px;
const ChartWrapper = styled.div`
  background-color: yellow;
  width: ${window.innerWidth};
  height: 400px;
  margin: 10px;
`;

function App() {
  const width = window.innerWidth;
  const margin = 10;
  const chartWidth = width / 3;
  console.log(window.innerWidth, chartWidth);

  return (
    <>
      <div id="line-chart">
        <LineChart height={"400px"} width={width - margin} />
      </div>
      <div id="bar-chart">
        <BarChart height={"400px"} width={width - margin} />
      </div>
      <div id="pie-chart">
        <PieChart height={"400px"} width={width - margin} />
      </div>
    </>
  );
}

export default App;
