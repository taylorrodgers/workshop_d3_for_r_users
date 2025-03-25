function plot_line(svg, data, x_dimension, y_dimension) {

  svg.append("path")
    .datum(data)
    .attr("d", d3.line()
      .x(function(d) {return x_dimension(new Date(d.date))})
      .y(function(d) {return y_dimension(d.gold_in_cash)})
    )
    .attr("class", "plot-line");
  //  .style("stroke", "blue")
 //   .style("stroke-width", 1.5)
 //   .style("fill", "none");

}