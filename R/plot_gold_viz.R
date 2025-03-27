#' Generate the Gold Visualization
#'
#' @import r2d3
#' @import stringr
#' @import jsonlite
#'
#' @export

plot_gold_viz_bar <- function(jGold, directory_path = "D3") {
  
  file_list <- list.files(
    path = directory_path, 
    full.names = TRUE)
  
  js_scripts <- file_list[grepl(".js",file_list)]
  js_scripts <- js_scripts[!grepl("line",js_scripts)]
  js_scripts <- js_scripts[!grepl("dot",js_scripts)]

  r2d3::r2d3(
    data = jGold,
    script = js_scripts
  )
  
} 

plot_gold_viz_line <- function(jGold, directory_path = "D3") {
  
  file_list <- list.files(
    path = directory_path, 
    full.names = TRUE)
  
  js_scripts <- file_list[grepl(".js",file_list)]
  js_scripts <- js_scripts[!grepl("bar",js_scripts)]

  r2d3::r2d3(
    data = jGold,
    script = js_scripts
  )
  
} 

