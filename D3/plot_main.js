const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200;300;400;500;600;700;900&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

const margin = {top: 100, bottom: 100, right: 100, left: 100};

svg
  .attr("class", "gold-viz-color")

// Create x and y dimensions
const x_dimension = plot_x_dimension(margin)
const y_dimension = plot_y_dimension(margin)

// Create x- and y-axis
plot_x_axis(svg, margin, x_dimension);
plot_y_axis(svg, margin, y_dimension);

// Add line
plot_line(svg, data, x_dimension, y_dimension);
plot_dot(svg, data, x_dimension, y_dimension);

// Add header
plot_header(svg, margin)