generate_script_and_css_list <- function(
    directory_path = "complete/D3") {
  
  file_list <- list.files(
    path = directory_path, 
    full.names = TRUE)
  
  scripts <- file_list[grepl(".js",file_list)]
  custom_css <- file_list[grepl("css",file_list)]
  
  return(
    list(
      scripts = scripts,
      custom_css = custom_css
    )
  )
  
  
}
