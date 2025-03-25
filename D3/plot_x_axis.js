function plot_x_axis(svg, margin, x_dimension) {
  // Stage Three: Define aesthetics
  const format_date = d3.utcFormat("%y %b");
  
  const x_aesthetic = d3.axisBottom(x_dimension)
    .tickFormat(format_date);
    
  // Stage Four: Append to SVG
  svg.append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .attr("class", "axis")
    .call(x_aesthetic);
    
  return x_dimension;
}