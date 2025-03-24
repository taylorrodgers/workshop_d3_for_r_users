const margin = {top: 100, bottom: 100, right: 100, left: 100}

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
    
  
   // .attr("class", "y-axis")
  
   // .attr("transform", `translate(${100}, 0)`)