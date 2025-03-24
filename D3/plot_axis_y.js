
function plot_axis_y(svg, margin) {
  
  // Stage One: Define min and max values of interest
  const y_min = 0;
  const y_max = 37500000;
  
  // Stage Two: Define dimensions
  const y_dimension = d3.scaleLinear()
    .domain([y_min, y_max])
    .range([height - margin.bottom, margin.top]);
   
  // Stage Three: Define aesthetics
  const y_aesthetic = d3.axisLeft(y_dimension);
  
  // Stage Four: Append to SVG
  svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(y_aesthetic);
  
}