function viz_gold_x_axis(x_dimension, margin, height) {

  // Define aesthetics for x-axis
  const x_aesthetic = d3.axisBottom(x_dimension)
    .tickFormat(d3.utcFormat("%y %b"));
  
  // Append x-axis to SVG
  svg.append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .attr("class", "axis")
    .call(x_aesthetic);
  
}