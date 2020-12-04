#main.R
plumber::plumb('api.R')$run(port=3000, host="0.0.0.0", swagger = T)

