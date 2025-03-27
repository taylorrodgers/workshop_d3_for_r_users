#' Server for the D3 Shiny App
#'
#' @import shiny
#' @import r2d3
#'
#' @export

app_server <- function(input, output) {
  
  output$plot_bar <- renderD3({
    plot_gold_viz_bar(jGold)
  })
  
  output$plot_line <- renderD3({
    plot_gold_viz_line(jGold)
  })
  
}
