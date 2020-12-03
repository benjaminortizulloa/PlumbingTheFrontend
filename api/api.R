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

#' Make a suggestion about a state's region
#' 
#' @param state state user wants to make a suggestion about
#' @param newRegion new region the user wants to suggest
#' @param user the user making the suggestion
#' @post /suggestion
postSuggestion

#' Get a list of suggested regions
#' 
#' @get /suggestions
getSuggestions
