#functions.R
states = data.frame(
  name=state.name,
  abb=state.abb,
  region=as.character(state.region),
  division=as.character(state.division),
  stringsAsFactors = F
)

stateData <- function(){
  return(states)
}
