function viz_gold_y_dimension(margin, height) {
  
  // Define y-axis min and max values
  const y_min = 0;
  const y_max = 25000000;
  
  // Define dimensions for y-axis
  const y_dimension = d3.scaleLinear()
    .domain([y_min, y_max])
    .range([height - margin.bottom, margin.top]);
    
  return y_dimension;
  
}