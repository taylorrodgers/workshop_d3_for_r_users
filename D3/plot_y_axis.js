
function plot_y_axis(svg, margin, y_dimension) {
  
  // Stage Three: Define aesthetics
  const y_aesthetic = d3.axisLeft(y_dimension)
    .ticks(5)
    .tickFormat(d => "$" + (d / 1000000) + "M");
  
  // Stage Four: Append to SVG
  svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .attr("class", "axis")
    .call(y_aesthetic);
    
    
  // Adding subtle tick lines
  
    const yGridLine = d3.axisLeft(y_dimension)
      .ticks(5)
      .tickFormat("")
      .tickSize(-(width - margin.right - margin.left)); ;
      
    
  svg.append("g")
  .attr("class", "y-axis")
  .attr("transform", `translate(${margin.left}, 0)`)
  .style("opacity", .10)
  .call(yGridLine);
  
  
}