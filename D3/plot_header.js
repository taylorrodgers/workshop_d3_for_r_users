function plot_header(svg, margin) {
  
  svg.append("text")
  .attr("class", "header")
  .attr("x", margin.left)
  .attr("y", margin.top * .15)
  .text("U.S. Gold Certificates in Treasury Cash")
  
  svg.append("text")
  .attr("class", "header")
  .attr("x", margin.left)
  .attr("y", margin.top * .50)
  .text("From November 1892 until December 1893")
  
}