import * as d3 from "d3";
import * as _ from "lodash";

export const renderQueuChart = data => {
  const margins = { top: 20, right: 30, bottom: 20, left: 30 };
  const width = 600;
  const height = 400;
  const chartWidth = width - margins.left - margins.right;
  const chartHeight = height - margins.top - margins.bottom;

  const yScale = d3
    .scaleLinear()
    .domain([0, 30])
    .range([0, chartHeight - margins.top]);

  const yAxisScale = d3
    .scaleLinear()
    .domain([0, 30])
    .range([chartHeight - margins.top, 0]);

  const yAxis = d3.axisLeft(yAxisScale);

  const xScale = d3
    .scaleLinear()
    .domain([0, 10])
    .range([0, chartWidth]);

  const xAxis = d3.axisBottom(xScale);

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

  const rectWidth = 35;

  chart
    .selectAll("rect")
    .data(_.reverse(_.sortBy(data, d => d.daysOnQueu)))
    .enter()
    .append("rect")
    .classed("danger", d => d.daysOnQueu >= 30)
    .classed("alert", d => _.inRange(d.daysOnQueu, 24, 30))
    .attr("transform", `translate(${margins.left}, 0)`)
    .attr("x", (d, i) => (i + 1) * chartWidth / 10 - rectWidth / 2)
    .attr("y", d => {
      return chartHeight - yScale(d.daysOnQueu);
    })
    .attr("val", d => d.daysOnQueu)
    .attr("width", rectWidth)
    .attr("height", d => yScale(d.daysOnQueu));

  chart
    .append("line")
    .attr("x1", 0)
    .attr("y1", yAxisScale(24) + margins.top)
    .attr("x2", chartWidth)
    .attr("y2", yAxisScale(24) + margins.top)
    .attr("transform", `translate(${margins.left}, 0)`)
    .classed("threshold-line alert-line", true);

  chart
    .append("line")
    .attr("x1", 0)
    .attr("y1", margins.top)
    .attr("x2", chartWidth)
    .attr("y2", margins.top)
    .attr("transform", `translate(${margins.left}, 0)`)
    .classed("threshold-line danger-line", true);

  chart
    .append("text")
    .text("80%")
    .attr("x", chartWidth)
    .attr("y", yAxisScale(24) + margins.top + 20)
    .classed("alert-text", true);

  chart
    .append("text")
    .text("100%")
    .attr("x", chartWidth)
    .attr("y", margins.top + 20)
    .classed("danger-text", true);
};
