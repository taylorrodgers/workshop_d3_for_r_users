#' D3 Shiny App
#'
#' @import shiny
#'
#' @export

app_run <- function() {
  shinyApp(ui = app_ui, server = app_server)
}

