function helper_line_animation(path) {
  
  path.attr("stroke-dasharray", function() {
      return this.getTotalLength();
    })
    .attr("stroke-dashoffset", function() {
      return this.getTotalLength();
    })
    .transition()
    .duration(500)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0); 
}