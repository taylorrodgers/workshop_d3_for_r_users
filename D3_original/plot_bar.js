function plot_bar(svg, margin, data, x_dimension, y_dimension) {
  
  const bar_width = (width - margin.left - margin.right) / 20;

  svg.selectAll("gold-bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x_dimension(new Date(d.date)) - (bar_width / 2))
    .attr("y", height - margin.bottom)  
    .attr("width", bar_width)
    .attr("height", 0)
    .transition()
    .delay(400)
    .duration(500)
    .attr("y", d => y_dimension(d.gold_in_cash))  
    .attr("height", d => height - margin.bottom - y_dimension(d.gold_in_cash))
    .attr("class", "gold-bar");

}