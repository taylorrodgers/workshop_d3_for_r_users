// Ensure the font is loaded by adding a <link> element to the document head
const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200;300;400;500;600;700;900&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

///if (options.margins) {
//  margin = { top: options.margins, right: options.margins, bottom: options.margins, left: options.margins };
//} else {
  margin = { top: 150, right: 100, bottom: 70, left: 100 };
//}

// Axis
const x_min = d3.timeDay.offset(d3.min(data.gold_circulation_filtered, d => new Date(d.months)), -20);
const x_max = d3.max(data.gold_circulation_filtered, d => new Date(d.months));
const x_tick_count = data.gold_circulation_filtered.filter(d => d.months).length;
const y_min = 0;
const y_max = d3.max(data.gold_circulation_filtered, d => d.gold_certificates_in_treasury_cash);
const y = plot_yaxis(svg, margin, y_min, y_max, width);
const x = plot_x_axis(svg, margin, x_min, x_max, x_tick_count);

// Labels, texts, and annotations
const header_primary = plot_header_primary(svg, margin, data);
const header_secondary = plot_header_secondary(svg, margin, data);

const annotation_one = plot_annotations(
  svg, 
  margin, 
  x_placement = new Date(data.annotations[0].months), 
  y_placement = data.annotations[0].gold_certificates_in_treasury_cash, 
  annotation_text = data.annotations[0].annotation, add_line = false);

const annotation_two = plot_annotations(
  svg, 
  margin, 
  x_placement = new Date(data.annotations[1].months), 
  y_placement = data.annotations[1].gold_certificates_in_treasury_cash, 
  annotation_text = data.annotations[1].annotation, 
  add_line = true,
  align = "left",
  color = "standard");

const annotation_three = plot_annotations(
  svg, 
  margin, 
  x_placement = new Date(data.annotations[2].months), 
  y_placement = data.annotations[2].gold_certificates_in_treasury_cash, 
  annotation_text = data.annotations[2].annotation, 
  add_line = true);

const y_label = plot_y_label(svg, margin);
const source_label = plot_source(svg, margin);


// Bars
const bars = plot_bar(svg, margin, data);
const highlight = plot_highlight(svg, margin, data);