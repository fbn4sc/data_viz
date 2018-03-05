import * as d3 from "d3";

export const renderQueuChart = () => {
  const yScale = d3
    .scaleLinear()
    .domain([30, 0])
    .range([0, 280]);
  const yAxis = d3.axisLeft(yScale);

  const xScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, 280]);

  const xAxis = d3.axisBottom(xScale);

  d3
    .select("#svg")
    .append("svg")
    .attr("width", "60%")
    .attr("height", 400)
    .append("g")
    .attr("transform", "translate(30,90)")
    .call(yAxis)
    .append("g")
    .attr("transform", "translate(0,280)")
    .call(xAxis);
};
