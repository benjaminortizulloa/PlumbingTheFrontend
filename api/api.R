source('functions.R')

#* @filter cors
cors <- function(req, res) {
  allowlist <- c("http://localhost:5500", "http://127.0.0.1:5500")

  if(!is.null(req$HTTP_ORIGIN)){
    if(req$HTTP_ORIGIN %in% allowlist){
      res$setHeader("Access-Control-Allow-Origin", req$HTTP_ORIGIN)
    }
  }
  res$setHeader('Vary', 'Origin')

  res$setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS")
  res$setHeader('Access-Control-Allow-Headers', 'Content-Type')
  plumber::forward()
}

#' Show state data
#' 
#' @get /states
stateData

#' Make a suggestion about a state's region
#' 
#' @param state state user wants to make a suggestion about
#' @param newRegion new region the user wants to suggest
#' @param user the user making the suggestion
#' @options /suggestion
#' @post /suggestion
function(req, res){

  if(req$REQUEST_METHOD == 'OPTIONS'){
    return( 'Is valid endpoint')
  }
  
  if(req$REQUEST_METHOD == 'POST'){
    postSuggestion(req$args$state, req$args$newRegion, req$args$user)
  }
  
}

#' Get a list of suggested regions
#' 
#' @get /suggestions
getSuggestions

#' Get Token
#' 
#' @param code
#' @get /OAuth
receiveOAuth
