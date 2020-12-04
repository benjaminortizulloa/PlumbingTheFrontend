states = data.frame(
  name=state.name,
  abb=state.abb,
  region=state.region,
  division=state.division,
  stringsAsFactors = F
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

mySecret = "mySuperSecret-Secret"

receiveOAuth <- function(code, req, res) {
  postBody <- list(client_id = "b823783bcb81ca97c4b9", client_secret = "f7e8f93e6e0262372a62c1573717441aa67c7c05", code = code)
  postres <- httr::POST('https://github.com/login/oauth/access_token', body = postBody)
  
  token = httr::content(postres)$access_token
  
  info = httr::GET("https://api.github.com/user", httr::add_headers(Authorization=paste('token', token)))
  
  jwt <- jose::jwt_claim(user = info$login)
  sig <- jose::jwt_encode_hmac(jwt, mySecret)

  res$setCookie('jwt', sig)
  
  myUrl <- "http://localhost:5500/"
  
  res$status <- 303 # redirect
  res$setHeader("Location", myUrl)

  paste0("<html>
         <head>
         <meta http-equiv=\"Refresh\" content=\"0; url=", myUrl, "\" />
         </head>
         <body>
         <p>Please follow <a href=\"",myUrl,"\">this link</a>.</p>
         </body>
         </html>")
}

putSuggestion <- function(state, newRegion, user, action){
  suggestions <<- suggestions[!(suggestions$state == state & suggestions$newRegion == newRegion & suggestions$user ==user), ]
  if(action == 'approve'){
    states[states$name == state,'region'] <<- newRegion
  }
  return(suggestions)
}
