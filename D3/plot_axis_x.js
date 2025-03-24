
function plot_axis_x(svg, margin) {
  // Stage One: Define min and max values of interest  
  const x_min = new Date("1892-11-01");
  const x_max = new Date("1893-12-31");  
  
  // Stage Two: Define dimensions
  const x_dimension = d3.scaleLinear()
    .domain([x_min, x_max])
    .range([margin.left, width - margin.right]);
    
  // Stage Three: Define aesthetics
  const x_aesthetic = d3.axisBottom(x_dimension)
    
  // Stage Four: Append to SVG
  svg.append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(x_aesthetic);
}