function plot_header(svg, margin) {
  
  svg.append("text")
  .attr("class", "header")
  .attr("x", -2000)
  .attr("y", margin.top * .25)
  .transition()
  .duration(1000)
  .attr("x", margin.left)
  .text("U.S. Gold Certificates in Treasury Cash")
  
  svg.append("text")
  .attr("class", "subheader")
  .attr("x", -2000)
  .attr("y", (margin.top * .25) + 30)
  .transition()
  .duration(1000)
  .attr("x", margin.left)
  .text("From November 1892 until December 1893")
  
}