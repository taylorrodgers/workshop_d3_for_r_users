function plot_bar(svg, margin, data) {
  
  barWidth = (width - margin.left - margin.right) / 20;
  
  svg.selectAll("bar")
  .data(data.gold_circulation_filtered)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("fill", "#4A4A4A")
  .attr("x", d => x(new Date(d.months)) - (barWidth / 2.25))
  .attr("y", d => y(d.gold_certificates_in_treasury_cash))
  .attr("width", barWidth)
  .attr("height", d => height - margin.bottom - y(d.gold_certificates_in_treasury_cash)); 
}