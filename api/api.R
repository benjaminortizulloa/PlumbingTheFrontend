source('functions.R')

#* @filter cors
cors <- function(res) {
  res$setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
  res$setHeader('Vary', 'Origin')
  plumber::forward()
}

#' Show state data
#' 
#' @get /states
stateData