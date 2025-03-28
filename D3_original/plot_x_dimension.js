function plot_x_dimension(margin) {
  // Stage One: Define min and max values of interest  
  const x_min = new Date("1892-10-01");
  const x_max = new Date("1893-12-01");  
  
  // Stage Two: Define dimensions
  const x_dimension = d3.scaleUtc()
    .domain([x_min, x_max])
    .range([margin.left, width - margin.right]);
    
  return x_dimension;
}