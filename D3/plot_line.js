function plot_line(svg, data, x_dimension, y_dimension) {

  const path = svg.append("path")
    .datum(data)
    .attr("d", d3.line()
      .x(function(d) {return x_dimension(new Date(d.date))})
      .y(function(d) {return y_dimension(d.gold_in_cash)})
    )
    .attr("class", "plot-line");
    
    helper_line_animation(path)

}