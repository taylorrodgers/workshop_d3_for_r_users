#' Generate JSON with Gold Data
#' 
#' @import jsonlite
#' @import dplyr
#' @import tidyr
#' @import freeStateData
#'
#' @export

util_generate_jGold <- function(us_treasury_data_1890s) {

  dGold <- us_treasury_data_1890s %>%
    filter(year_month >= as.Date("1892-11-01"),
           year_month <= as.Date("1893-12-31")) %>%
    select("year_month",
           "gold_certificates_in_treasury_cash") %>%
    rename(
      date = year_month,
      gold_in_cash = gold_certificates_in_treasury_cash)
  
  jGold <- jsonlite::toJSON(dGold)
}

