states = data.frame(
  name=state.name,
  abb=state.abb,
  region=state.region,
  division=state.division
)

stateData <- function(){
  return(states)
}
