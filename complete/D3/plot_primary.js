function plot_primary(svg, margin) {
  
  // Axis
  const xMin = d3.timeDay.offset(d3.min(data.gold_circulation_filtered, d => new Date(d.months)), -20);
  const xMax = d3.max(data.gold_circulation_filtered, d => new Date(d.months));
  const xTickCount = data.gold_circulation_filtered.filter(d => d.months).length;
  const minY = 0;
  const maxY = d3.max(data.gold_circulation_filtered, d => d.gold_certificates_in_treasury_cash);
  const y = plot_yaxis(svg, margin, minY, maxY);
  const x = plot_xaxis(svg, margin, xMin, xMax, xTickCount);
  
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
  
  return svg.node();
}