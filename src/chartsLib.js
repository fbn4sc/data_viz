import * as d3 from "d3";

export const renderQueuChart = () => {
  const margins = { top: 20, right: 20, bottom: 20, left: 20 };
  const width = 600;
  const height = 400;
  const chartWidth = width - margins.left - margins.right;
  const chartHeight = height - margins.top - margins.bottom;

  const yScale = d3
    .scaleLinear()
    .domain([0, 30])
    .range([chartHeight, 0]);
  const yAxis = d3.axisLeft(yScale);

  const xScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, chartWidth]);

  const xAxis = d3.axisBottom(xScale);

  d3
    .select("#svg")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(30, ${margins.top})`)
    .call(yAxis)
    .append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxis);
};
