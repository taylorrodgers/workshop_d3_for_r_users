#' User Interface for D3 Shiny App
#' 
#' @import shiny
#' @import r2d3
#' @import bslib
#' 
#' @export

app_ui <- page(
  theme = bs_theme(
    base_font = font_link(
      "Source Sans 3", 
      "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
    )
  ),
  div(class = "row", style = "height: 100vh;",
      div(class = "col-12 col-md-3",
          div(class = "card m-3 mt-5 shadow-sm",
              div(class = "card-body",
                  h3("D3 in R Shiny"),
                  p("The visualizations on the right are built with D3."),
                  p("D3 is great for interactive and responsive data visualizations."),
                  p("Try changing the size of the screen. Notice how the visualization automatically adjusts itself.")
              )
          )
      ),
      div(class = "col-12 col-md-9",
          div(class = "m-3 mt-5",
              d3Output("plot_bar"),
              br(),
              d3Output("plot_line")
          )
          
      )
  )
)