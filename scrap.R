library(devtools)
library(tidyverse)
library(jsonlite)
library(freeStateData)
data("us_treasury_data_1890s")

dGold <- us_treasury_data_1890s %>%
  select("year_month",
         "gold_certificates_in_treasury_cash") %>%
  rename(
    date = year_month,
    gold_in_cash = gold_certificates_in_treasury_cash)

jGold <- jsonlite::toJSON(dGold)
jGold

r2d3::r2d3(
  data = jGold,
  script = "D3/plot_main.js"
)
