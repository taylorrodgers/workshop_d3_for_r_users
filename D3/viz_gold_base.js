 // Define the margins
const margin = {top: 100, bottom: 75, right: 75, left: 75};

// Define x-axis min and max values
const x_min = new Date("1892-10-01");
const x_max = new Date("1893-12-01");  
 
// Define dimension for x-axis
const x_dimension = d3.scaleUtc()
  .domain([x_min, x_max])
  .range([margin.left, width - margin.right]);
  
// Define aesthetics for x-axis
const x_aesthetic = d3.axisBottom(x_dimension)
  .tickFormat(d3.utcFormat("%y %b"));

// Append x-axis to SVG
svg.append("g")
  .attr("transform", `translate(0, ${height - margin.bottom})`)
  .attr("class", "axis")
  .call(x_aesthetic);
  
// Define y-axis min and max values
const y_min = 0;
const y_max = 25000000;

// Define dimensions for y-axis
const y_dimension = d3.scaleLinear()
  .domain([y_min, y_max])
  .range([height - margin.bottom, margin.top]);
 
// Define aesthetics for y-axis  
const y_aesthetic = d3.axisLeft(y_dimension)
  .ticks(5)
  .tickFormat(d => "$" + (d / 1000000) + "M");
  
// Append y-axis to SVG
svg.append("g")
  .attr("transform", `translate(${margin.left}, 0)`)
  .attr("class", "axis")
  .call(y_aesthetic);
  
// Define aesthetics for y-axis' subtle grid lines
const y_gridline = d3.axisLeft(y_dimension)
  .ticks(5)
  .tickFormat("")
  .tickSize(-(width - margin.right - margin.left));
    
// Append y-axis' grid lines to SVG  
svg.append("g")
  .attr("class", "axis")
  .attr("transform", `translate(${margin.left}, 0)`)
  .style("opacity", .10)
  .call(y_gridline);
  
    