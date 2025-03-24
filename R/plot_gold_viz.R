plot_gold_viz <- function(jGold, directory_path = "Cloud/project/D3") {
  file_list <- list.files(
    path = directory_path, 
    full.names = TRUE)
  
  js_scripts <- file_list[grepl(".js",file_list)]
  
  r2d3::r2d3(
    data = jGold,
    script = c("D3/plot_main.js", "D3/plot_axis_x.js", "D3/plot_axis_y.js")
  )
  
}