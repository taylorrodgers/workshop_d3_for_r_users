function plot_x_axis(svg, margin, min_date, max_date, x_tick_count) {
  
  
  const timeFormat = d3.utcFormat("%y %b");
  
  const x = d3.scaleTime()
  .domain([min_date, max_date])
  .range([margin.left, width - margin.right]);
  
  const tickValues = x.ticks(x_tick_count); 
  
  if (tickValues[tickValues.length - 1] < max_date) {
    tickValues.push(max_date);
  }
  
  const x_axis = d3.axisBottom(x)
  .tickValues(tickValues)
  .tickFormat(timeFormat);
  
  svg.append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${height - margin.bottom})`)
  .call(x_axis);
  
  return x;
  
}