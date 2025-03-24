function plot_source(svg, margin) {
  
  svg.append("text")
  .attr("class", "text-source")
  .attr("x", width - 10)
  .attr("y", height - 10)
  .text("U.S. Treasury's Report of Financial Panic of 1893");
  
}