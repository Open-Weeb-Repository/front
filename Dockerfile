#############
### build ###
#############
FROM node:alpine as build

RUN mkdir -p /app

WORKDIR /app

COPY . /app

# adding apiurl
ARG apiurl="http://localhost:3030"
ENV APIURL=$apiurl

## install and build configuration file
RUN npm install && npm run build:prod

############
### prod ###
############
FROM nginx:alpine
# copy artifact build from the 'build environment'
COPY --from=build /app/dist/front /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
