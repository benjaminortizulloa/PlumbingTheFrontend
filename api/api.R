source('functions.R')

#* @filter cors
cors <- function(res) {
  res$setHeader("Access-Control-Allow-Origin", "*")
  plumber::forward()
}

#' Show state data
#' 
#' @get /states
stateData