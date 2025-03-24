function plot_y_label(svg, margin) {
  
  svg.append("text")
  .attr("class", "axis-label")
  .attr("x", -(height / 2))
  .attr("y", margin.left - 70)
  .attr("transform", "rotate(-90)")
  .attr("text-anchor", "middle")
  .append("tspan")
  .text("Gold Certificates in U.S. Treasury") 
  .append("tspan")
  .attr("x", -(height / 2))
  .attr("dy", "1.2em") 
  .style("font-style", "italic") 
  .text("(millions)");
  
}