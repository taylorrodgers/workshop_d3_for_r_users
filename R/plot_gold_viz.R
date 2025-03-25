plot_gold_viz <- function(jGold, directory_path = "/cloud/project/D3") {
  file_list <- list.files(
    path = directory_path, 
    full.names = TRUE)
  
  js_scripts <- file_list[grepl(".js",file_list)]

  r2d3::r2d3(
    data = jGold,
    script = js_scripts,
    css = paste0(directory_path, "/style.css")
  )
  
} 
