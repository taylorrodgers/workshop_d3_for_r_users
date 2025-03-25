function plot_dot(svg, data, x_dimension, y_dimension) {
  svg.selectAll("circle") 
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) {return x_dimension(new Date(d.date))})
    .attr("cy", function (d) { return y_dimension(d.gold_in_cash); }) 
    .attr("class", "plot-dots");
}
