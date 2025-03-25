
function plot_y_axis(svg, margin, y_dimension) {
  
  // Stage Three: Define aesthetics
  const y_aesthetic = d3.axisLeft(y_dimension)
    .tickFormat(d => "$" + (d / 1000000) + "M");
  
  // Stage Four: Append to SVG
  svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .attr("class", "axis")
    .call(y_aesthetic);
  
}