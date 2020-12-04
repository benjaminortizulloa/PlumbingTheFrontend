source('functions.R')

#* @filter cors
cors <- function(req, res) {
  allowlist <- c("http://127.0.0.1:5500", "http://localhost:5500")

  if(req$HTTP_ORIGIN %in% allowlist){
    res$setHeader("Access-Control-Allow-Origin", req$HTTP_ORIGIN)
  }
  res$setHeader('Vary', 'Origin')
  plumber::forward()
}

#' Show state data
#' 
#' @get /states
stateData
