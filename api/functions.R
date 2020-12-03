states = data.frame(
  name=state.name,
  abb=state.abb,
  region=state.region,
  division=state.division
)

stateData <- function(){
  return(states)
}


suggestions = data.frame(
  state = c('Delaware', 'Maryland'),
  newRegion = c('Northeast', 'Northeast'),
  user = c('AnLLCOwner', 'TheRealChowder'),
  stringsAsFactors = F
)

postSuggestion <- function(state, newRegion, user){
  newSuggestion <- data.frame(state = state, newRegion = newRegion, user = user, stringsAsFactors = F)
  suggestions <<- rbind(suggestions, newSuggestion)

  return(suggestions)
}

getSuggestions <- function(){
  return(suggestions)
}