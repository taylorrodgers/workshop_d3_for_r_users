 // Define the margins
const margin = {top: 100, bottom: 75, right: 75, left: 75};

// Define dimensions
const x_dimension = viz_gold_x_dimension(margin, width);
const y_dimension = viz_gold_y_dimension(margin, height);
  
// Generate the two axis on SVG
viz_gold_x_axis(x_dimension, margin, height);
viz_gold_y_axis(y_dimension, margin, width);

// Add shapes
gold_bar(svg, margin, data, x_dimension, y_dimension)
    