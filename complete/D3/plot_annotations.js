function plot_annotations(
  svg, 
  margin, 
  x_placement, 
  y_placement, 
  annotation_text, 
  add_line, 
  align = "middle",
  color = "highlight") {
  
      svg.append("text")
        .attr("class", "text-annotation " + color)
        .attr("x", x(x_placement))
        .attr("y", y(y_placement) - 10)
        .text(annotation_text)
        .attr("text-anchor", align);
    
    if (add_line) {
      
      svg.append("line")
        .attr("class", color + " line")
        .attr("x1", x(x_placement))
        .attr("x2", x(x_placement))
        .attr("y1", y(y_placement) - 5)
        .attr("y2", y(0) - 10);

    }
}