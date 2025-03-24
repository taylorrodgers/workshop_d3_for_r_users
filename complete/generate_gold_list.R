generate_gold_list <- function(gold_circulation, min_date = "1892-11-01", max_date = "1893-12-01") {
  
  min_date <- as.Date(min_date)
  max_date <- as.Date(max_date)
  
  gold_circulation_filtered <-  gold_circulation %>%
    filter(months >= min_date, 
           months <= max_date) %>%
    select(months, gold_certificates_in_treasury_cash)
  
  highlights <- gold_circulation_filtered %>% 
    filter(months %in% c(as.Date("1892-12-01"), max(gold_circulation_filtered$months)))
  
  annotations <- gold_circulation_filtered %>% 
    filter(months %in% c(as.Date("1892-12-01"), as.Date("1893-03-01"), max(gold_circulation_filtered$months))) %>%
    mutate(
      annotation = ifelse(
        months == as.Date("1893-03-01"), "President Cleveland begins second term",
        ifelse(gold_certificates_in_treasury_cash >= 1000000, 
               paste0("$",round(gold_certificates_in_treasury_cash / 1000000,2), " million"),
               paste0("$", round(gold_certificates_in_treasury_cash / 1000, 2), " thousand"))),
      gold_certificates_in_treasury_cash = ifelse(
        months == as.Date("1893-03-01"),
        17500000, 
        ifelse(months == max_date, 22500000, 25000000)
      )
    )
  
  gold_circulation_list = list(
    gold_circulation_filtered = gold_circulation_filtered,
    highlights = highlights, 
    annotations = annotations
  )
  
  return(gold_circulation_list)
  
}