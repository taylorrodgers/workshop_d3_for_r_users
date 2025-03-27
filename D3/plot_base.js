// Assign svg a class
svg
  .attr("class", "gold-viz")
 
// Define the margins
const margin = {top: 100, bottom: 75, right: 75, left: 75};

// Create x and y dimensions
const x_dimension = plot_x_dimension(margin)
const y_dimension = plot_y_dimension(margin)

// Create x- and y-axis
plot_x_axis(svg, margin, data, x_dimension);
plot_y_axis(svg, margin, y_dimension);

const plot_bar_file = "plot_bar.js"

// Add bar, if it exists
if (typeof plot_bar === "function") {
  plot_bar(svg, margin, data, x_dimension, y_dimension)
}

// Add line, if it exists
if (typeof plot_line === "function") {
  plot_line(svg, data, x_dimension, y_dimension);
}


// Add text
plot_header(svg, margin)
plot_source(svg, margin)

