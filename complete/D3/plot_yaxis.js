function plot_yaxis(svg, margin, minY, maxY, width) {
  
  const roundedMaxY =  Math.ceil(maxY / 1000000) * 1000000;
  const tickMajorInterval = roundedMaxY / 5;
  const tickMinorInterval = tickMajorInterval / 2;
  const tickMajorValues = d3.range(0, roundedMaxY + tickMajorInterval, tickMajorInterval);
  const tickMinorValues = d3.range(0, roundedMaxY + tickMinorInterval, tickMinorInterval);
  
  const y = d3.scaleLinear()
  .domain([minY, roundedMaxY]) 
  .range([height - margin.bottom, margin.top]);
  
  const yAxis = d3.axisLeft(y)
  .tickValues(tickMajorValues)
  .tickFormat(d => `$${d / 1000000}`); ;
  
  const yGridLine = d3.axisLeft(y)
  .tickValues(tickMajorValues)
  .tickFormat("")
  .tickSize(-(width - margin.right - margin.left)); ;
  
  
  svg.append("g")
  .attr("class", "y-axis")
  .attr("transform", `translate(${margin.left}, 0)`)
  .call(yAxis);
  
  svg.append("g")
  .attr("class", "y-axis")
  .attr("transform", `translate(${margin.left}, 0)`)
  .style("opacity", .10)
  .call(yGridLine);
  
  return y; 
  
}