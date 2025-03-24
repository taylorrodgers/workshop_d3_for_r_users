function plot_header_secondary(svg, margin, data) {
  
  if (width < 741 & width > 400) {
    svg.append("text")
    .attr("class", "header-secondary-medium")
    .attr("x", margin.left - 30)
    .attr("y", 80)
    .text("From December 1892 until December 1893");
  } else if (width < 400) {
    svg.append("text")
    .attr("class", "header-secondary-small")
    .attr("x", margin.left - 30)
    .attr("y", 80)
    .text("From December 1892 until December 1893");
  } else {
    svg.append("text")
    .attr("class", "header-secondary")
    .attr("x", margin.left - 30)
    .attr("y", 80)
    .text("From December 1892 until December 1893");  
  }
  
  
}