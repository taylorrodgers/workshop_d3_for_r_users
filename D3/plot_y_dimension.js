function plot_y_dimension() {
    // Stage One: Define min and max values of interest
  const y_min = 0;
  const y_max = 37500000;
  
  // Stage Two: Define dimensions
  const y_dimension = d3.scaleLinear()
    .domain([y_min, y_max])
    .range([height - margin.bottom, margin.top]);
    
  return y_dimension;
}