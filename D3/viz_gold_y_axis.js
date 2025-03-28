function viz_gold_y_axis(y_dimension, margin, width) {
  
  // Define aesthetics for y-axis  
  const y_aesthetic = d3.axisLeft(y_dimension)
    .ticks(5)
    .tickFormat(d => "$" + (d / 1000000) + "M");
    
  // Append y-axis to SVG
  svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .attr("class", "axis")
    .call(y_aesthetic);
    
  // Define aesthetics for y-axis' subtle grid lines
  const y_gridline = d3.axisLeft(y_dimension)
    .ticks(5)
    .tickFormat("")
    .tickSize(-(width - margin.right - margin.left));
      
  // Append y-axis' grid lines to SVG  
  svg.append("g")
    .attr("class", "axis")
    .attr("transform", `translate(${margin.left}, 0)`)
    .style("opacity", .10)
    .call(y_gridline);
    
}