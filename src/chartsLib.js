import * as d3 from "d3";
import * as _ from "lodash";

export const renderQueuChart = () => {
  const margins = { top: 20, right: 30, bottom: 20, left: 30 };
  const width = 600;
  const height = 400;
  const chartWidth = width - margins.left - margins.right;
  const chartHeight = height - margins.top - margins.bottom;

  const yScale = d3
    .scaleLinear()
    .domain([0, 30])
    .range([chartHeight - margins.top, 0]);

  const yAxis = d3.axisLeft(yScale);

  const xScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, chartWidth]);

  const xAxis = d3.axisBottom(xScale);

  const data = [
    {
      company: "Ingersoll-Rand plc (Ireland)",
      daysOnQueu: 3
    },
    {
      company: "ALPS/Dorsey Wright Sector Momentum ETF",
      daysOnQueu: 26
    },
    {
      company: "Lindblad Expeditions Holdings Inc. ",
      daysOnQueu: 22
    },
    {
      company: "Zogenix, Inc.",
      daysOnQueu: 6
    },
    {
      company: "Kennedy-Wilson Holdings Inc.",
      daysOnQueu: 25
    },
    {
      company: "SunTrust Banks, Inc.",
      daysOnQueu: 21
    },
    {
      company: "First Trust RiverFront Dynamic Europe ETF",
      daysOnQueu: 27
    },
    {
      company: "Everest Re Group, Ltd.",
      daysOnQueu: 27
    },
    {
      company: "Resource Capital Corp.",
      daysOnQueu: 7
    },
    {
      company: "Cushing Renaissance Fund (The)",
      daysOnQueu: 15
    }
  ];

  d3
    .select("#chart-container")
    .append("svg")
    .attr("id", "chart")
    .attr("width", width)
    .attr("height", height);

  const chart = d3.select("#chart");

  chart
    .append("g")
    .attr("transform", `translate(${margins.left}, ${margins.top})`)
    .call(yAxis);

  chart
    .append("g")
    .attr("transform", `translate(${margins.left}, ${chartHeight})`)
    .call(xAxis);

  const rectWidth = 20;

  chart
    .selectAll("rect")
    .data(_.sortBy(data, d => d.daysOnQueu))
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale(i) + rectWidth + chartWidth / 10)
    .attr("y", d => {
      return chartHeight - yScale(d.daysOnQueu);
    })
    .attr("width", rectWidth)
    .attr("height", d => yScale(d.daysOnQueu));
};
