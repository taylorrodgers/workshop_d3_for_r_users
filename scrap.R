### Load data sets and all related functions
library(freeStateData)
devtools::load_all()

### Produce JSON file
data(us_treasury_data_1890s)
jGold <- util_generate_jGold(us_treasury_data_1890s)
rm(us_treasury_data_1890s)

### Run data viz
plot_gold_viz_bar(jGold)
plot_gold_viz_line(jGold)

### Run Shiny App
app_run()
