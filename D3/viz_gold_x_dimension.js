function viz_gold_x_dimension(margin, width) {
  // Define x-axis min and max values
  const x_min = new Date("1892-10-01");
  const x_max = new Date("1893-12-01");  
  
  // Define dimension for x-axis
  const x_dimension = d3.scaleUtc()
  .domain([x_min, x_max])
  .range([margin.left, width - margin.right]);
  
  return x_dimension;
}