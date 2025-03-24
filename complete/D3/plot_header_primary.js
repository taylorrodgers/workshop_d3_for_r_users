function  plot_header_primary(svg, margin, data) {
  
  const change = (((data.highlights[0].gold_certificates_in_treasury_cash - data.highlights[1].gold_certificates_in_treasury_cash) / data.highlights[0].gold_certificates_in_treasury_cash) * 100).toFixed(1) + "%"
  
  if (width < 741 & width > 400) {
    svg.append("text")
    .attr("class", "header-primary-medium")
    .attr("x", margin.left - 30)
    .attr("y", 50)
    .text("Gold Certificates in U.S. Treasury ")
    .append("tspan")
    .attr("class", "highlight")
    .text(" Declined " + change);
  } else if (width < 400) {
    svg.append("text")
    .attr("class", "header-primary-small")
    .attr("x", margin.left - 30)
    .attr("y", 50)
    .text("Gold Certificates in U.S. Treasury ")
    .append("tspan")
    .attr("class", "highlight")
    .text(" Declined " + change); 
  } else {
    svg.append("text")
    .attr("class", "header-primary")
    .attr("x", margin.left - 30)
    .attr("y", 50)
    .text("Gold Certificates in U.S. Treasury ")
    .append("tspan")
    .attr("class", "highlight")
    .text(" Declined " + change);     
  }
  
  
}