library(devtools)
library(tidyverse)
library(jsonlite)
library(freeStateData)

devtools::load_all()


jGold <- util_generate_jGold()

### Run data viz
plot_gold_viz_bar(jGold)
plot_gold_viz_line(jGold)

### Run Shiny App
app_run()