import React, { useEffect, useState } from "react";
import * as d3 from "d3";

function LineChart(props) {
  useEffect(() => {
    drawChart();
    window.addEventListener("resize", redraw);
    return () => {
      window.removeEventListener("resize", redraw);
    };
  });

  const redraw = () => {
    d3.select("#line-chart")
      .selectAll("g > *")
      .remove();
    drawChart();
  };

  const drawChart = () => {
    const data = [
      { day: "monday", number: 10 },
      { day: "tuesday", number: 50 },
      { day: "wednesday", number: 3 },
      { day: "thursday", number: 22 },
      { day: "friday", number: 60 }
    ];

    const svgWidth = window.innerWidth - 50;
    const svgHeight = 400;
    const margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 50
    };

    const width = svgWidth - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const svg = d3.select("#line-chart").select("svg");

    const g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var max = d3.max(data, function(d) {
      return d.number;
    });

    const x = d3
      .scalePoint()
      .domain(
        data.map(function(d) {
          return d.day;
        })
      )
      .range([0, width - 100]);
    const y = d3
      .scaleLinear()
      .domain([0, max])
      .range([height, 0]);

    x.domain(
      data.map(function(d) {
        return d.day;
      })
    );

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    g.append("g").call(d3.axisLeft(y));

    const myLine = d3
      .line()
      .x(d => x(d.day))
      .y(d => y(d.number));

    // svg
    var path = g
      .append("g")
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("transform", "translate(0," + 0 + ")");

    var totalLength = path.node().getTotalLength();

    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(4000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0);
  };

  return (
    <div id="line-chart">
      <svg width={props.width} height={props.height} />
    </div>
  );
}

export default LineChart;
