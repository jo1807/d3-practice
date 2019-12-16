import React, { useEffect } from "react";
import * as d3 from "d3";

import "./App.css";

function App() {
  useEffect(() => {
    drawChart();
  }, []);

  const drawChart = () => {
    //const data = [12, 5, 6, 6, 9, 10];
    const data = [1, 2, 3, 4, 5, 6];
    const w = 500;
    const h = 400;
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")
      .on("mouseover", (d, i) =>
        d3
          .select(this)
          .transition()
          .duration("200")
          .attr("rect", 5)
      );
  };

  return <div id={"bar-chart"}></div>;
}

export default App;
