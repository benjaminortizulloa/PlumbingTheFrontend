FROM alpine:3.7

FROM rocker/r-ver:4.0.2

RUN apt-get update -qq && apt-get install -y \
      libssl-dev \
      libcurl4-gnutls-dev 
      
RUN R -e "install.packages(c('httr', 'jose', 'plumber'))"

COPY / /

EXPOSE 3000

ENTRYPOINT ["Rscript", "main.R"]